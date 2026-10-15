// Usage: bun scripts/verify-game.ts <slug> [<slug>...]
// Validates one game folder without a full Astro build (siblings may be mid-edit).
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { SHOWDOWNS, verifyExample } from '../src/lib/poker/showdown';

const root = path.resolve(import.meta.dir, '../src/content');
const dossiers = new Set(fs.readdirSync(path.resolve(root, '../../research/dossiers')).map((f) => f.replace(/\.md$/, '')));
const glossary = new Set(fs.readdirSync(path.join(root, 'glossary')).map((f) => f.replace(/\.yaml$/, '')));
const FAMILIES = ['board', 'draw', 'stud', 'hybrid'];
const STRUCTURES = ['limit', 'pot-limit', 'no-limit'];

let failed = false;
for (const slug of process.argv.slice(2)) {
  const errs: string[] = [];
  const dir = path.join(root, 'games', slug);
  const metaPath = path.join(dir, 'meta.yaml');
  if (!fs.existsSync(metaPath)) {
    console.log(`FAIL ${slug}: no meta.yaml`);
    failed = true;
    continue;
  }
  const meta = YAML.parse(fs.readFileSync(metaPath, 'utf8'));
  for (const k of ['name', 'summary', 'family', 'structures', 'holeCards', 'draws', 'showdown', 'sources']) {
    if (meta[k] === undefined) errs.push(`meta.yaml missing "${k}"`);
  }
  if (!FAMILIES.includes(meta.family)) errs.push(`bad family ${meta.family}`);
  for (const s of meta.structures ?? []) if (!STRUCTURES.includes(s)) errs.push(`bad structure ${s}`);
  const spec = SHOWDOWNS[meta.showdown];
  if (!spec) errs.push(`unknown showdown "${meta.showdown}" (known: ${Object.keys(SHOWDOWNS).join(', ')})`);
  for (const s of meta.sources ?? []) if (!/^https?:\/\//.test(s.url ?? '')) errs.push(`bad source url ${s.url}`);
  for (const r of [...(meta.related ?? []), ...(meta.parent ? [meta.parent] : [])]) {
    if (!dossiers.has(r) && !fs.existsSync(path.join(root, 'games', r))) errs.push(`related/parent "${r}" is not a known slug`);
  }
  const examples = meta.examples ?? [];
  if (spec) {
    if (spec.ways.length === 0 && examples.length) errs.push('showdown "custom" cannot have examples');
    for (const ex of examples) errs.push(...verifyExample(spec, ex));
  }
  const ids = new Set(examples.map((e: { id: string }) => e.id));
  for (const mode of ['full', 'lingo']) {
    const f = path.join(dir, `${mode}.mdx`);
    if (!fs.existsSync(f)) {
      errs.push(`missing ${mode}.mdx`);
      continue;
    }
    const body = fs.readFileSync(f, 'utf8');
    for (const m of body.matchAll(/<Example game="([^"]+)" id="([^"]+)"/g)) {
      if (m[1] !== slug) errs.push(`${mode}.mdx: Example game="${m[1]}" should be "${slug}"`);
      else if (!ids.has(m[2])) errs.push(`${mode}.mdx: Example id "${m[2]}" not in meta.yaml`);
    }
    for (const id of ids) if (!body.includes(`id="${id}"`)) errs.push(`${mode}.mdx: example "${id}" never embedded`);
    for (const m of body.matchAll(/\/glossary#([a-z0-9-]+)/g)) {
      if (!glossary.has(m[1])) errs.push(`${mode}.mdx: glossary entry "${m[1]}" does not exist (create src/content/glossary/${m[1]}.yaml)`);
    }
  }
  console.log(errs.length ? `FAIL ${slug}\n  ${errs.join('\n  ')}` : `ok   ${slug}`);
  if (errs.length) failed = true;
}
process.exit(failed ? 1 : 0);

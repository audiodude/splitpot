# Split Pot

Rules for the weird games at a casino mixed-games night (O8, Drawmaha, Badeucy, 2-7 Triple Draw, ...), written for Hold'em players who just sat down. Planned domain: splitpot.poker.

## Develop

```
npm install
npm run dev        # or: astro dev --background
npm test           # evaluator unit tests
npm run build      # static site -> dist/
```

## How content works

Each game is a folder in `src/content/games/<slug>/`:

- `meta.yaml`: facts (family, structure, cards, draws, showdown rules id, sources) and worked `examples`.
- `full.mdx` / `lingo.mdx`: the two hand-written versions of the page ("Full breakdown" / "I know the lingo"). A site-wide toggle picks one; both are in the static HTML.

**Every worked example is verified at build time.** `src/lib/poker/showdown.ts` evaluates the cards and the build fails if the claimed `winners` don't match. Showdown rules are composable (`ways` = card-selection rule x ranking x qualifier). Embed an example with `<Example game="slug" id="example-id" />`.

Glossary entries live in `src/content/glossary.yaml`; link them from lingo pages with `/glossary#id`.

`research/` holds the sourcing dossiers the pages were written from (rooms disagree on a lot; each dossier records where).

## Deploy

Cloudflare Pages project `splitpot` (custom domain splitpot.poker). **Deploy `dist/` only, never the project root**:

```
npm run build && npx wrangler pages deploy dist --project-name splitpot --branch main
```

(needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment.)

Gotchas:
- Do NOT run `wrangler pages project create` or `wrangler deploy` in this repo: wrangler's auto-configuration rewrites `astro.config.mjs`/`package.json` to add the Cloudflare adapter and deploys a Worker instead. The Pages project was created via the Pages API.
- After a first deploy, verify by **content** that `/.env`, `/.git/config`, `/wrangler.toml` return only the site's HTML fallback (compare `md5sum` with `/`), not real file bytes.
## Later

- "Who wins?" showdown quiz (the evaluator is built for it).

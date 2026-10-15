import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SHOWDOWNS, verifyExample } from './lib/poker/showdown';

const example = z.object({
  id: z.string(),
  title: z.string(),
  board: z.string().optional(),
  players: z
    .array(
      z.object({
        name: z.string(),
        /** Final hand at showdown, e.g. "As Kd 7h 2c". For stud: all seven cards. */
        cards: z.string(),
        /** Draw games: what they threw away, for display only. */
        discards: z.string().optional(),
      }),
    )
    .min(1),
  /** Claimed winners per showdown way id (see src/lib/poker/showdown.ts). [] = nobody qualifies. */
  winners: z.record(z.string(), z.array(z.string())),
});

/** One folder per game: meta.yaml (shared facts) + full.mdx + lingo.mdx (the two hand-written versions). */
const games = defineCollection({
  loader: glob({
    pattern: '*/meta.yaml',
    base: './src/content/games',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z
    .object({
      name: z.string(),
      abbrevs: z.array(z.string()).default([]),
      nicknames: z.array(z.string()).default([]),
      /** One-liner for the index row. */
      summary: z.string(),
      family: z.enum(['board', 'draw', 'stud', 'hybrid']),
      structures: z.array(z.enum(['limit', 'pot-limit', 'no-limit'])).min(1),
      /** Private cards per player (stud: total cards a player ends with). */
      holeCards: z.number().int().positive(),
      draws: z.number().int().min(0),
      showdown: z.enum(Object.keys(SHOWDOWNS) as [string, ...string[]]),
      parent: reference('games').optional(),
      related: z.array(reference('games')).default([]),
      sources: z.array(z.object({ title: z.string(), url: z.url() })).min(1),
      examples: z.array(example).default([]),
    })
    .superRefine((game, ctx) => {
      const spec = SHOWDOWNS[game.showdown];
      for (const ex of game.examples) {
        for (const message of verifyExample(spec, ex)) ctx.addIssue({ code: 'custom', message, path: ['examples'] });
      }
      const ids = game.examples.map((e) => e.id);
      if (new Set(ids).size !== ids.length) ctx.addIssue({ code: 'custom', message: 'duplicate example id', path: ['examples'] });
    }),
});

const gameBodies = defineCollection({
  loader: glob({ pattern: '*/{full,lingo}.mdx', base: './src/content/games' }),
});

/** One file per entry: src/content/glossary/<id>.yaml */
const glossary = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    aka: z.array(z.string()).default([]),
    definition: z.string(),
  }),
});

export const collections = { games, gameBodies, glossary };

import { assertDistinct, cardStr, parseCards, type Card } from './cards';
import { RANKINGS, type RankingId } from './rankings';

/** Which cards a hand may be built from. */
export type Selector =
  | { from: 'hole' }
  | { from: 'hole+board' }
  /** Exactly `hole` cards from the hand and `board` from the community cards (Omaha family). */
  | { from: 'exact'; hole: number; board: number };

export type QualifierId = '8-or-better';

const QUALIFIERS: Record<QualifierId, { label: string; test(cards: Card[]): boolean }> = {
  '8-or-better': {
    label: '8-or-better',
    test(cards) {
      const ranks = cards.map((c) => (c.rank === 14 ? 1 : c.rank));
      return new Set(ranks).size === 5 && Math.max(...ranks) <= 8;
    },
  },
};

/** One way to win a share of the pot. A game with two ways splits the pot in half. */
export interface Way {
  id: string;
  label: string;
  ranking: RankingId;
  select: Selector;
  qualifier?: QualifierId;
}

export interface ShowdownSpec {
  id: string;
  ways: Way[];
}

const HOLE: Selector = { from: 'hole' };
const ALL: Selector = { from: 'hole+board' };
const OMAHA: Selector = { from: 'exact', hole: 2, board: 3 };
const LOW8 = { id: 'low', label: 'Low (8-or-better)', ranking: 'a5-low', qualifier: '8-or-better' } as const;

const specs: ShowdownSpec[] = [
  { id: 'holdem', ways: [{ id: 'high', label: 'High', ranking: 'high', select: ALL }] },
  { id: 'omaha', ways: [{ id: 'high', label: 'High', ranking: 'high', select: OMAHA }] },
  {
    id: 'omaha-8',
    ways: [{ id: 'high', label: 'High', ranking: 'high', select: OMAHA }, { ...LOW8, select: OMAHA }],
  },
  { id: 'stud', ways: [{ id: 'high', label: 'High', ranking: 'high', select: HOLE }] },
  { id: 'stud-8', ways: [{ id: 'high', label: 'High', ranking: 'high', select: HOLE }, { ...LOW8, select: HOLE }] },
  { id: 'razz', ways: [{ id: 'low', label: 'Low (A-5)', ranking: 'a5-low', select: HOLE }] },
  { id: 'draw-high', ways: [{ id: 'high', label: 'High', ranking: 'high', select: HOLE }] },
  { id: 'draw-27', ways: [{ id: 'low', label: '2-7 Low', ranking: '27-low', select: HOLE }] },
  { id: 'draw-a5', ways: [{ id: 'low', label: 'A-5 Low', ranking: 'a5-low', select: HOLE }] },
  { id: 'badugi', ways: [{ id: 'badugi', label: 'Badugi', ranking: 'badugi', select: HOLE }] },
  {
    id: 'badeucy',
    ways: [
      { id: 'badugi', label: 'Badugi (aces high)', ranking: 'badugi-ace-high', select: HOLE },
      { id: 'low', label: '2-7 Low', ranking: '27-low', select: HOLE },
    ],
  },
  {
    id: 'badacey',
    ways: [
      { id: 'badugi', label: 'Badugi', ranking: 'badugi', select: HOLE },
      { id: 'low', label: 'A-5 Low', ranking: 'a5-low', select: HOLE },
    ],
  },
  {
    id: 'drawmaha',
    ways: [
      { id: 'draw', label: 'Draw hand (5-card high)', ranking: 'high', select: HOLE },
      { id: 'omaha', label: 'Omaha hand (high)', ranking: 'high', select: OMAHA },
    ],
  },
  {
    id: 'drawmaha-27',
    ways: [
      { id: 'draw', label: 'Draw hand (2-7 low)', ranking: '27-low', select: HOLE },
      { id: 'omaha', label: 'Omaha hand (high)', ranking: 'high', select: OMAHA },
    ],
  },
  {
    id: 'drawmaha-a5',
    ways: [
      { id: 'draw', label: 'Draw hand (A-5 low)', ranking: 'a5-low', select: HOLE },
      { id: 'omaha', label: 'Omaha hand (high)', ranking: 'high', select: OMAHA },
    ],
  },
  {
    id: 'drawmaha-badugi',
    ways: [
      { id: 'draw', label: 'Draw hand (Badugi)', ranking: 'badugi', select: HOLE },
      { id: 'omaha', label: 'Omaha hand (high)', ranking: 'high', select: OMAHA },
    ],
  },
  { id: 'holdem-8', ways: [{ id: 'high', label: 'High', ranking: 'high', select: ALL }, { ...LOW8, select: ALL }] },
  {
    id: 'omaha-no-qualifier',
    ways: [
      { id: 'high', label: 'High', ranking: 'high', select: OMAHA },
      { id: 'low', label: 'Low (A-5, no qualifier)', ranking: 'a5-low', select: OMAHA },
    ],
  },
  {
    id: 'stud-no-qualifier',
    ways: [
      { id: 'high', label: 'High', ranking: 'high', select: HOLE },
      { id: 'low', label: 'Low (A-5, no qualifier)', ranking: 'a5-low', select: HOLE },
    ],
  },
  {
    id: 'razzdugi',
    ways: [
      { id: 'low', label: 'Razz low (A-5)', ranking: 'a5-low', select: HOLE },
      { id: 'badugi', label: 'Badugi', ranking: 'badugi', select: HOLE },
    ],
  },
  {
    id: 'razzdeucey',
    ways: [
      { id: 'low', label: '2-7 Low', ranking: '27-low', select: HOLE },
      { id: 'badugi', label: 'Badugi (aces high)', ranking: 'badugi-ace-high', select: HOLE },
    ],
  },
];

export const SHOWDOWNS: Record<string, ShowdownSpec> = Object.fromEntries(specs.map((s) => [s.id, s]));

function combinations<T>(items: T[], k: number): T[][] {
  if (k === 0) return [[]];
  if (items.length < k) return [];
  const [first, ...rest] = items;
  return [...combinations(rest, k - 1).map((c) => [first, ...c]), ...combinations(rest, k)];
}

function candidates(select: Selector, sizes: number[], hole: Card[], board: Card[]): Card[][] {
  if (select.from === 'exact') {
    const boardSets = combinations(board, select.board);
    return combinations(hole, select.hole).flatMap((h) => boardSets.map((b) => [...h, ...b]));
  }
  const pool = select.from === 'hole' ? hole : [...hole, ...board];
  return sizes.flatMap((k) => combinations(pool, k));
}

function compare(a: number[], b: number[]): number {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const d = (a[i] ?? -Infinity) - (b[i] ?? -Infinity);
    if (d !== 0) return d;
  }
  return 0;
}

export interface PlayerInput {
  name: string;
  cards: string;
}

export interface WayResult {
  way: Way;
  /** Per player, in input order. `best` null = no legal/qualifying hand. */
  hands: { name: string; best: Card[] | null; description: string }[];
  winners: string[];
}

export interface ShowdownResult {
  ways: WayResult[];
  /** Fraction of the pot each player wins (odd chips ignored). */
  shares: Record<string, number>;
}

export function evaluate(spec: ShowdownSpec, players: PlayerInput[], boardText = ''): ShowdownResult {
  const board = parseCards(boardText);
  const parsed = players.map((p) => ({ name: p.name, hole: parseCards(p.cards) }));
  assertDistinct([...board, ...parsed.flatMap((p) => p.hole)]);

  const ways = spec.ways.map((way): WayResult => {
    const ranking = RANKINGS[way.ranking];
    const qualifier = way.qualifier ? QUALIFIERS[way.qualifier] : undefined;
    const scored = parsed.map(({ name, hole }) => {
      let best: { cards: Card[]; score: number[] } | null = null;
      for (const cards of candidates(way.select, ranking.sizes, hole, board)) {
        const score = ranking.score(cards);
        if (!score || (qualifier && !qualifier.test(cards))) continue;
        if (!best || compare(score, best.score) > 0) best = { cards, score };
      }
      return { name, best };
    });
    const top = scored.reduce<number[] | null>(
      (acc, s) => (s.best && (!acc || compare(s.best.score, acc) > 0) ? s.best.score : acc),
      null,
    );
    return {
      way,
      hands: scored.map(({ name, best }) => ({
        name,
        best: best?.cards ?? null,
        description: best ? ranking.describe(best.cards) : qualifier ? `No qualifying ${way.label.toLowerCase()}` : 'No hand',
      })),
      winners: top ? scored.filter((s) => s.best && compare(s.best.score, top) === 0).map((s) => s.name) : [],
    };
  });

  // A way nobody qualifies for (e.g. no 8-or-better low) folds its share into the others.
  const live = ways.filter((w) => w.winners.length > 0);
  const shares: Record<string, number> = Object.fromEntries(players.map((p) => [p.name, 0]));
  for (const w of live) for (const n of w.winners) shares[n] += 1 / live.length / w.winners.length;
  return { ways, shares };
}

export interface ExampleInput {
  id: string;
  board?: string;
  players: PlayerInput[];
  /** Claimed winners per way id; [] = nobody qualifies. */
  winners: Record<string, string[]>;
}

/** Returns human-readable mismatches between an authored example's claim and the evaluator. */
export function verifyExample(spec: ShowdownSpec, ex: ExampleInput): string[] {
  let result: ShowdownResult;
  try {
    result = evaluate(spec, ex.players, ex.board);
  } catch (e) {
    return [`example "${ex.id}": ${(e as Error).message}`];
  }
  const errors: string[] = [];
  const wayIds = spec.ways.map((w) => w.id);
  for (const k of Object.keys(ex.winners)) {
    if (!wayIds.includes(k)) errors.push(`example "${ex.id}": unknown way "${k}" (spec ${spec.id} has ${wayIds.join(', ')})`);
  }
  for (const w of result.ways) {
    const claimed = ex.winners[w.way.id];
    if (!claimed) {
      errors.push(`example "${ex.id}": missing claimed winners for way "${w.way.id}"`);
      continue;
    }
    if ([...claimed].sort().join() !== [...w.winners].sort().join()) {
      const detail = w.hands.map((h) => `${h.name}: ${h.description}${h.best ? ` [${h.best.map(cardStr).join(' ')}]` : ''}`);
      errors.push(
        `example "${ex.id}" way "${w.way.id}": claimed [${claimed.join(', ')}] but evaluator says [${w.winners.join(', ')}] — ${detail.join('; ')}`,
      );
    }
  }
  return errors;
}

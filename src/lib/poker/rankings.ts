import { rankChar, type Card } from './cards';

/**
 * A ranking scores a specific set of cards. Scores compare lexicographically; higher is better.
 * `score` returns null when the card set isn't a legal hand for this ranking (e.g. a Badugi
 * subset with a repeated suit), so selectors can skip it.
 */
export interface Ranking {
  id: RankingId;
  /** Chip label for the "What wins" facet. */
  facet: string;
  /** Allowed hand sizes. */
  sizes: number[];
  score(cards: Card[]): number[] | null;
  describe(cards: Card[]): string;
}

export type RankingId = 'high' | 'a5-low' | '27-low' | 'badugi' | 'badugi-ace-high';

const NAME: Record<number, string> = {
  2: 'Deuce', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight',
  9: 'Nine', 10: 'Ten', 11: 'Jack', 12: 'Queen', 13: 'King', 14: 'Ace', 1: 'Ace',
};
const plural = (r: number) => (r === 6 ? 'Sixes' : `${NAME[r]}s`);

/** Ranks grouped by multiplicity (desc), then rank (desc): e.g. K K 7 7 2 → [[13,2],[7,2],[2,1]]. */
function groups(ranks: number[]): [rank: number, count: number][] {
  const counts: Record<number, number> = {};
  for (const r of ranks) counts[r] = (counts[r] ?? 0) + 1;
  return Object.entries(counts)
    .map(([r, n]) => [Number(r), n] as [number, number])
    .sort((a, b) => b[1] - a[1] || b[0] - a[0]);
}

const CAT = {
  high: 0, pair: 1, twoPair: 2, trips: 3, straight: 4, flush: 5, fullHouse: 6, quads: 7, straightFlush: 8,
} as const;

/** Standard 5-card high evaluation. `[category, ...tiebreakers]`. */
function highScore(cards: Card[], wheelIsStraight: boolean): number[] {
  const g = groups(cards.map((c) => c.rank));
  const flush = cards.every((c) => c.suit === cards[0].suit);
  let straightHigh = 0;
  if (g.length === 5) {
    const top = g[0][0];
    if (top - g[4][0] === 4) straightHigh = top;
    else if (wheelIsStraight && top === 14 && g[1][0] === 5) straightHigh = 5;
  }
  const kickers = g.map(([r]) => r);
  if (straightHigh && flush) return [CAT.straightFlush, straightHigh];
  if (g[0][1] === 4) return [CAT.quads, ...kickers];
  if (g[0][1] === 3 && g[1][1] === 2) return [CAT.fullHouse, ...kickers];
  if (flush) return [CAT.flush, ...kickers];
  if (straightHigh) return [CAT.straight, straightHigh];
  if (g[0][1] === 3) return [CAT.trips, ...kickers];
  if (g[0][1] === 2 && g[1][1] === 2) return [CAT.twoPair, ...kickers];
  if (g[0][1] === 2) return [CAT.pair, ...kickers];
  return [CAT.high, ...kickers];
}

function describeHigh(s: number[]): string {
  const [cat, a, b] = s;
  switch (cat) {
    case CAT.straightFlush: return a === 14 ? 'Royal flush' : `${NAME[a]}-high straight flush`;
    case CAT.quads: return `Four ${plural(a)}`;
    case CAT.fullHouse: return `Full house, ${plural(a)} full of ${plural(b)}`;
    case CAT.flush: return `${NAME[a]}-high flush`;
    case CAT.straight: return `${NAME[a]}-high straight`;
    case CAT.trips: return `Three ${plural(a)}`;
    case CAT.twoPair: return `Two pair, ${plural(a)} and ${plural(b)}`;
    case CAT.pair: return `Pair of ${plural(a)}`;
    default: return `${NAME[a]} high`;
  }
}

/** "8-6-4-2-A" style spelled-out low hand, highest card first. */
const lowString = (ranks: number[]) =>
  [...ranks].sort((x, y) => y - x).map((r) => (r === 1 ? 'A' : rankChar(r))).join('-');

const high: Ranking = {
  id: 'high',
  facet: 'High',
  sizes: [5],
  score: (cards) => highScore(cards, true),
  describe: (cards) => describeHigh(highScore(cards, true)),
};

/** Ace-to-five: aces low, straights and flushes ignored, pairs are bad. */
const a5Low: Ranking = {
  id: 'a5-low',
  facet: 'A-5 Low',
  sizes: [5],
  score(cards) {
    const g = groups(cards.map((c) => (c.rank === 14 ? 1 : c.rank)));
    // Fewer distinct ranks = worse (pair < no pair, etc.); then lower ranks better.
    return [g.length, -g[0][1], ...g.map(([r]) => -r)];
  },
  describe(cards) {
    const ranks = cards.map((c) => (c.rank === 14 ? 1 : c.rank));
    if (groups(ranks).length === 5) return `${lowString(ranks)} low`;
    return `${describeHigh(highScore(cards, false))} (paired low)`;
  },
};

/** Deuce-to-seven: aces high, straights and flushes count against you. Best = 7-5-4-3-2 offsuit. */
const low27: Ranking = {
  id: '27-low',
  facet: '2-7 Low',
  sizes: [5],
  score: (cards) => highScore(cards, false).map((x) => -x),
  describe(cards) {
    const s = highScore(cards, false);
    if (s[0] === CAT.high) return `${lowString(cards.map((c) => c.rank))} low`;
    return `${describeHigh(s)} (bad for 2-7)`;
  },
};

/**
 * Badugi: up to four cards, all different suits AND ranks.
 * More cards beats fewer; then compare highest card down, lower wins.
 * Aces are low in regular Badugi, high in Badeucy's Badugi half.
 */
function badugiRanking(id: RankingId, aceLow: boolean): Ranking {
  const rankOf = (c: Card) => (aceLow && c.rank === 14 ? 1 : c.rank);
  return {
    id,
    facet: 'Badugi',
    sizes: [4, 3, 2, 1],
    score(cards) {
      const suits = new Set(cards.map((c) => c.suit));
      const ranks = cards.map(rankOf);
      if (suits.size !== cards.length || new Set(ranks).size !== cards.length) return null;
      return [cards.length, ...ranks.sort((x, y) => y - x).map((r) => -r)];
    },
    describe(cards) {
      const str = lowString(cards.map(rankOf));
      return cards.length === 4 ? `${str} badugi` : `${cards.length}-card ${str}`;
    },
  };
}

export const RANKINGS: Record<RankingId, Ranking> = {
  high,
  'a5-low': a5Low,
  '27-low': low27,
  badugi: badugiRanking('badugi', true),
  'badugi-ace-high': badugiRanking('badugi-ace-high', false),
};

export type Suit = 's' | 'h' | 'd' | 'c';

/** rank: 2..14, ace = 14. Rankings that treat aces as low remap internally. */
export interface Card {
  rank: number;
  suit: Suit;
}

const RANK_CHARS = '23456789TJQKA';

export function parseCard(text: string): Card {
  const m = /^(10|[2-9TJQKA])([shdc])$/i.exec(text.trim());
  if (!m) throw new Error(`Bad card "${text}" (expected e.g. "As", "Td", "10h")`);
  const r = m[1] === '10' ? 'T' : m[1].toUpperCase();
  return { rank: RANK_CHARS.indexOf(r) + 2, suit: m[2].toLowerCase() as Suit };
}

/** Space-separated list, e.g. "As Kd 7h". Empty string → []. */
export function parseCards(text: string): Card[] {
  const t = text.trim();
  return t ? t.split(/\s+/).map(parseCard) : [];
}

export function rankChar(rank: number): string {
  return RANK_CHARS[rank - 2];
}

export function cardStr(c: Card): string {
  return rankChar(c.rank) + c.suit;
}

/** Throws if any card appears twice (catches typos in authored examples). */
export function assertDistinct(cards: Card[]): void {
  const seen = new Set<string>();
  for (const c of cards) {
    const k = cardStr(c);
    if (seen.has(k)) throw new Error(`Card ${k} appears more than once`);
    seen.add(k);
  }
}

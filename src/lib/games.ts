import type { CollectionEntry } from 'astro:content';
import { RANKINGS } from './poker/rankings';
import { SHOWDOWNS } from './poker/showdown';

export const FAMILY_LABEL: Record<string, string> = {
  board: 'Board games',
  draw: 'Draw games',
  stud: 'Stud games',
  hybrid: 'Hybrids',
};

export const STRUCTURE_LABEL: Record<string, string> = {
  limit: 'Limit',
  'pot-limit': 'Pot-limit',
  'no-limit': 'No-limit',
};

/** "What wins" chips, derived from the showdown spec so facets can't drift from the rules engine. */
export function winsFacets(game: CollectionEntry<'games'>['data']): string[] {
  const ways = SHOWDOWNS[game.showdown].ways;
  if (ways.length === 0) return ['Other'];
  const facets = [...new Set(ways.map((w) => RANKINGS[w.ranking].facet))];
  return ways.length > 1 ? [...facets, 'Split pot'] : facets;
}

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

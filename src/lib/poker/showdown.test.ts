import { describe, expect, it } from 'vitest';
import { parseCards } from './cards';
import { RANKINGS } from './rankings';
import { evaluate, SHOWDOWNS, verifyExample } from './showdown';

const score = (id: keyof typeof RANKINGS, cards: string) => RANKINGS[id].score(parseCards(cards))!;
const beats = (a: number[], b: number[]) => {
  for (let i = 0; i < Math.max(a.length, b.length); i++) if ((a[i] ?? -1e9) !== (b[i] ?? -1e9)) return (a[i] ?? -1e9) > (b[i] ?? -1e9);
  return false;
};

describe('high', () => {
  it('orders categories and treats the wheel as a 5-high straight', () => {
    expect(beats(score('high', 'Ah 2c 3d 4s 5h'), score('high', 'Ks Kd Kh 2c 3d'))).toBe(true);
    expect(beats(score('high', '2h 3c 4d 5s 6h'), score('high', 'Ah 2c 3d 4s 5h'))).toBe(true);
    expect(beats(score('high', '2h 2c 3d 3s 3h'), score('high', 'Ah Kh 9h 4h 2h'))).toBe(true);
    expect(beats(score('high', 'Kh Kc 7d 7s 2h'), score('high', 'Kd Ks 7h 7c 2d'))).toBe(false);
  });
});

describe('A-5 low', () => {
  it('ignores straights/flushes, aces low, pairs lose to any unpaired hand', () => {
    expect(beats(score('a5-low', 'Ah 2h 3h 4h 5h'), score('a5-low', 'Ac 2d 3s 4h 6c'))).toBe(true);
    expect(beats(score('a5-low', 'Kc Qd Js 9h 8c'), score('a5-low', 'Ac Ad 2s 3h 4c'))).toBe(true);
    expect(beats(score('a5-low', '8c 6d 4s 2h Ac'), score('a5-low', '8d 7c 3s 2c Ah'))).toBe(true);
  });
});

describe('2-7 low', () => {
  it('aces are high and straights/flushes count against you', () => {
    expect(beats(score('27-low', '7c 5d 4s 3h 2c'), score('27-low', '8c 5d 4s 3h 2c'))).toBe(true);
    expect(beats(score('27-low', 'Kc Qd Js 9h 8c'), score('27-low', 'Ac 5d 4s 3h 2c'))).toBe(true); // A-5 is ace-high, not a wheel
    expect(beats(score('27-low', '8c 7d 4s 3h 2c'), score('27-low', '7h 5h 4h 3h 2h'))).toBe(true); // flush
    expect(beats(score('27-low', '9c 8d 4s 3h 2c'), score('27-low', '6c 5d 4s 3h 2d'))).toBe(true); // straight
  });
});

describe('badugi', () => {
  it('rejects repeated suits or ranks; more cards beat fewer', () => {
    expect(RANKINGS.badugi.score(parseCards('Ah 2h 3c 4d'))).toBeNull();
    expect(RANKINGS.badugi.score(parseCards('2h 2c 3d 4s'))).toBeNull();
    expect(beats(score('badugi', 'Kh Qc Jd Ts'), score('badugi', 'Ah 2c 3d'))).toBe(true);
  });
});

describe('evaluate', () => {
  it('Omaha must use exactly two hole cards: four-flush on board is not a flush with one heart', () => {
    const r = evaluate(SHOWDOWNS.omaha, [{ name: 'A', cards: 'Ah Kc Kd 2s' }, { name: 'B', cards: 'Qs Qc 9d 9c' }], '3h 7h 9h Jh 2c');
    expect(r.ways[0].winners).toEqual(['B']);
  });

  it('O8: no qualifying low → high scoops', () => {
    const r = evaluate(SHOWDOWNS['omaha-8'], [{ name: 'A', cards: 'As Ad 2c 3d' }, { name: 'B', cards: 'Kc Kd Qs Js' }], 'Ks 9h Th 9c 4d');
    expect(r.ways[1].winners).toEqual([]);
    expect(r.shares).toEqual({ A: 0, B: 1 });
  });

  it('O8: split pot with quartering', () => {
    const r = evaluate(
      SHOWDOWNS['omaha-8'],
      [{ name: 'A', cards: 'As 2d Ks Kd' }, { name: 'B', cards: 'Ac 2h Qs Qd' }, { name: 'C', cards: 'Js Jd Jc 9s' }],
      '3c 5h 8d Jh Tc',
    );
    expect(r.ways[1].winners.sort()).toEqual(['A', 'B']);
    expect(r.shares).toEqual({ A: 0.25, B: 0.25, C: 0.5 });
  });

  it('Badeucy: badugi half and 2-7 half can go to different players', () => {
    const r = evaluate(SHOWDOWNS.badeucy, [{ name: 'A', cards: '2c 3d 4h 5s 9c' }, { name: 'B', cards: '7c 6d 4s 3c 2h' }]);
    expect(r.ways.map((w) => w.winners)).toEqual([['A'], ['B']]);
  });

  it('Badeucy: aces are HIGH in the badugi half, so A-2-3-4 is a bad badugi', () => {
    const r = evaluate(SHOWDOWNS.badeucy, [{ name: 'A', cards: 'Ac 2d 3h 4s 4c' }, { name: 'B', cards: '9d 8c 7h 6s 6c' }]);
    expect(r.ways[0].winners).toEqual(['B']);
  });

  it('Razzdugi: chooses best 5 of 7 for razz and best 4 of 7 for badugi', () => {
    const r = evaluate(SHOWDOWNS.razzdugi, [
      { name: 'A', cards: 'Ac 2d 3h 4s 5c Kd Kh' },
      { name: 'B', cards: 'Ah 2c 3c 4d Ks 9s 9d' },
    ]);
    // Razz: A has the wheel (A-5 low), B's best is K-4-3-2-A.
    expect(r.ways[0].winners).toEqual(['A']);
    // Badugi: A has A-2-3-4 rainbow, the nuts. B's best four rainbow cards are worse.
    expect(r.ways[1].winners).toEqual(['A']);
  });

  it('Stud hi-lo: best five of seven for each half', () => {
    const r = evaluate(SHOWDOWNS['stud-8'], [
      { name: 'A', cards: 'Ac 2d 3h 4s 6c Kd Kh' },
      { name: 'B', cards: 'Qs Qd 9c 9h 2c 7d 7h' },
    ]);
    expect(r.ways.map((w) => w.winners)).toEqual([['B'], ['A']]);
  });

  it('rejects duplicate cards', () => {
    expect(() => evaluate(SHOWDOWNS.holdem, [{ name: 'A', cards: 'As Ks' }], 'As 2c 3d')).toThrow(/As appears/);
  });
});

describe('verifyExample', () => {
  it('reports a wrong claim with the evaluator detail', () => {
    const errors = verifyExample(SHOWDOWNS.holdem, {
      id: 'x',
      board: '2c 7d 9h Jc Qs',
      players: [{ name: 'A', cards: 'As Ah' }, { name: 'B', cards: 'Kd Kc' }],
      winners: { high: ['B'] },
    });
    expect(errors).toHaveLength(1);
    expect(errors[0]).toMatch(/evaluator says \[A\]/);
  });
});

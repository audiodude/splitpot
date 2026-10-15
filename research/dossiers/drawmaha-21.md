---
slug: drawmaha-21
name: Drawmaha 21
abbrevs: ["Dramaha 21", "Drawmaha 21"]
nicknames: ["Dramaha Blackjack"]
family: hybrid
wins: [high, other]
usualStructure: [limit, pot-limit]
holeCards: 5
draws: 1
players: "2-7 (same as Drawmaha)"
parent: drawmaha
canonicalSource: "BARGE Rulebook 'Dramaha 21' (the only rule-sheet-style source; also named in Card Player, Haney). Not in WSOP 2026 Live-Action Rules"
---
## Deal & structure
Same as `drawmaha`: 5 hole cards, blinds, small-bet betting round pre-flop, 3-card flop and small-bet round, then ONE draw (BARGE: discard 0-3 cards, replacements dealt), then the turn at the big bet, then the river at the big bet and showdown. Limit sizing per BARGE; pot-limit/no-limit forms follow the parent game.

## Showdown / what wins
Pot splits in half.
1. **Omaha-high half:** exactly 2 hole + exactly 3 board cards.
2. **"21" half:** the draw half is won by the hole-card "points" total closest to 21 without going over. Point values: ace = 1 (never 11); two through ten = face value; jack/queen/king = 0 (BARGE, Haney).
   - BARGE: a player "may have 21 points, but no more" and cards that would push you over are simply ignored (you pick the best subset). BARGE examples: A-K-Q-T-T = 5-card 21 (T+T+A = 21, K and Q count zero); A-Q-T-6-4 = 5-card 21; K-T-T-8-6 = a 3-card 20 (T+T; the 8 and 6 would bust it so they are ignored); 9-8-7-6-5 = 3-card 21 (9+7+5).
   - **Tiebreaker:** the player using the MOST cards wins the tie (BARGE and Haney agree). Example: A-9-6-3-2 (five cards counting) beats a hand reaching 21 with fewer counting cards; remember kings/queens/jacks are zero and are "invisible" for this count (Haney's example says a king does not add to the card count).
   - Haney's version differs: he says a hand that totals more than 21 "busts" and is only eligible for the Omaha side. See Rooms disagree.
3. Scoops are possible. If nobody can make a 21 side qualify (every hand busts) no source says what happens [UNVERIFIED].

## Rooms disagree
- **Bust handling.** BARGE: excess cards are ignored and you play the best subset up to 21, so you can't bust. Haney (Card Player, May 2025): going over 21 busts the whole draw hand, leaving only the Omaha side. These are materially different games; ask the table.
- **Face-card value.** BARGE warns some online sources say face cards are worth 1 point; BARGE uses 0.
- **Draw cap:** BARGE 0-3 (like WSOP's Drawmaha 1-3 or stand pat).
- Turn/draw order as in parent `drawmaha`.

## Common newcomer mistakes
- Counting an ace as 11: ace is only 1 (Haney explicitly).
- Counting a ten as zero: tens are 10 points.
- Forgetting the card-count tiebreak, which makes a five-card 21 better than a three-card 21.
- Over-valuing 21 combinations that have no Omaha value: Haney says no one had a good sense of what a playable hand looks like, so play was slow and tight.

## Lore & reputation
- BARGE notes it was part of the Drawmaha mix tournament at EMBARGO 2026 — the best evidence it's actually spread at events.
- Haney (Card Player, May 2025) calls it "somewhat gimmicky", rates it 6/10, says he took it out of his own home rotation after a few rounds. His best-case dealt hand is A♦A♣8♦8♣3♥ (five-card 21).
- Haney earlier lists the draw side in some Dramaha games as "the highest blackjack hand" (Old School Dramaha, Mar 2025), i.e. this game.
- Not in WSOP's Live-Action Drawmaha text, in Coach's Resorts World mix, or in Phenom's online mixes (checked).

## Related games
drawmaha, drawmaha-49, drawmaha-zero, 2-7-drawmaha

## Sources
- https://www.barge.org/rulebook/dramaha-21.html — structure, scoring, tiebreak, EMBARGO 2026
- https://www.cardplayer.com/cardplayer-poker-magazines/66566-mike-moncek-38-9/articles/25372-spice-up-your-home-game-point-based-dramaha-variants — Haney: 21 variant, bust rule, rating
- https://www.cardplayer.com/poker-news/29945-spice-up-your-poker-home-game-old-school-dramaha — blackjack mention
- /tmp/wsop.txt (WSOP 2026 Live-Action Rules, lines 1121-1144) — 21 not named
- https://www.cardplayer.com/cardplayer-poker-magazines/66506-chad-eveslage-36-2/articles/24732-the-coach-s-game-at-resorts-world-part-1 — not in Coach's mix
- https://phenompoker.com/blog/mixed-games-rules/ — not in Phenom mixes

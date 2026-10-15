---
slug: badugi-drawmaha
name: Badugi Drawmaha (Dramadugi)
abbrevs: ["Dramadugi", "DramaDugi", "Drawmaha Badugi", "Dramaha Low-Dugi", "Drawmaha Low-Dugi", "Drawmaha-Dugi"]
nicknames: ["Dramadugi", "Low-Dugi"]
family: hybrid
wins: [high, badugi]
usualStructure: [limit, pot-limit]
holeCards: 5
draws: 1
players: "2-7 (WSOP max 7)"
parent: drawmaha
canonicalSource: "WSOP 2026 Live-Action Rules 'Drawmaha' (lists Badugi variant) + Badugi section; BARGE Rulebook 'Dramadugi'"
---
## Deal & structure
Same flop-with-one-draw skeleton as `drawmaha`:
- Button + blinds; 5 hole cards each; betting round; 3-card flop; betting round.
- ONE draw after the flop betting: BARGE says discard 0-3 cards (WSOP: 1-3 or stand pat). Replacements dealt, then turn and betting, river and final betting.
- Limit: first two betting rounds at the small bet, last two at the big bet (BARGE). Played pot-limit in BARGE 2024's tournament; WSOP allows limit/pot-limit/no-limit.

## Showdown / what wins
Pot splits in half, no qualifier (a three-card badugi can win the draw half).
1. **Omaha-high half:** best 5-card high from exactly 2 hole cards + exactly 3 board cards.
2. **Badugi half:** best four-card badugi from your hole cards only (the board does not play). Hands (WSOP badugi rules + Haney + Steve Badger):
   - A badugi = four cards of different suits AND different ranks. Aces are low. Straights and flushes mean nothing.
   - Best is A-2-3-4 rainbow. Compare highest card down: 4-3-2-A beats 5-3-2-A.
   - Any four-card badugi beats any three-card hand; any three-card beats a two-card hand, etc. With five hole cards you may hold more than one possible badugi—use the best.
   - If nobody has a four-card badugi, the best three-card badugi wins the half (WSOP rule 298 example: A-2-3 [from Ad-2c-3h-6h] beats A-3-4 [from Ac-3d-4h-5h]).
3. A single player can scoop. Ties split that half. Odd chip: by position clockwise from button (WSOP).

## Rooms disagree
- **Name:** "Dramadugi" (BARGE, Phenom, Steve Badger), "Drawmaha Low-Dugi" (Coach's Resorts World mix), "Drawmaha Badugi" (WSOP, Cardplayer Lifestyle calls it "Drawmaha-Dugi"). Haney writes "Dramadugi (sometimes referred to as Dramaha Low-Dugi)".
- **Draw cap:** WSOP 1-3 vs BARGE 0-3 (otherwise identical in effect, WSOP just doesn't count a "stand pat" as a draw).
- **Original home game (different structure):** the first "Badugi + Omaha" game, written up on Red Chip Poker as "LOB" (Limit Omaha Badugi), is NOT this game: it dealt 4 hole cards, a Badugi-style draw before the flop, another after the flop, another after the turn (three draws), and split the pot between best Badugi and Omaha high. WSOP's "Badugi" Drawmaha variant uses the five-card one-draw structure described here. If a room says "Drawmaha Badugi", ask which. BARGE's separate "Triple Draw Dramaha" (5 cards, three draws interleaved) is another cousin.
- **Turn-first vs draw-first** dealing and draw caps: same as parent `drawmaha`.

## Common newcomer mistakes
- Treating the Badugi half like 2-7 or A-5: suits matter; a pair or two same-suit cards drop you to a 3-card (or fewer) badugi.
- Breaking a made badugi to chase Omaha, or keeping a fifth card that kills the badugi. Steve Badger's example: with a flop of K-8-8, keep an 8 rather than a lower card of the same suit if it makes trips, even though it weakens your badugi.
- Playing weak badugis: Badger says rough pat Kings are garbage once someone else has entered the pot, but any pat Jack or better is fine if unopened.
- Three-card "unsuited, unconnected small cards" (e.g. 7-3-2) look good for badugi but are weak for Omaha (Badger).
- Aces: they are both the best badugi card and the best Omaha card, so overvalue/undervalue is common (Badger: A-high vs T-high pat badugi differ hugely).

## Lore & reputation
- Haney (Card Player, Apr 2025) rates Dramadugi 8/10 ("easy to explain, decent action, most players approve of having it in the mix"); only flaw: hard to make a strong Omaha hand while also holding four low unsuited cards. He gives odds of being dealt a pat badugi as roughly one in five (19.8%), K-high pat badugi 5.2%, queen 4.3%, jack 3.4%, ten 2.6%, nine 1.8%, eight 1.2%, seven 0.7%.
- Steve Badger lists Dramaha High, 2-7 Dramaha and Dramadugi as the three most common variants and says Dramadugi frustrates tilt-prone players more than the others.
- Where it's spread: Coach's $8-$16 mix at Resorts World (as "Drawmaha Low-Dugi", Card Player 2023), Phenom Poker's "Super Circus" mix ("DramaDugi"), BARGE 2024 tournament (pot-limit).
- Origin: home-game "LOB" (Red Chip Poker 2014, credited to Todd Flannagan), later renamed Drawmaha; the Red Chip page was updated in 2016 to say Nevada Gaming approved it for the WSOP.

## Related games
drawmaha, badugi-high-drawmaha, badugi, badacey, 2-7-drawmaha, a-5-drawmaha

## Sources
- /tmp/wsop.txt (WSOP 2026 Live-Action Rules, lines 1121-1144, 1663-1701) — Drawmaha text, Badugi rules and 3-card badugi example
- https://www.barge.org/rulebook/dramadugi.html — structure, 0-3 draw, BARGE 2024 pot-limit
- https://www.cardplayer.com/poker-news/29943-spice-up-your-poker-home-game-the-badugi-dramahas — Haney: Dramadugi odds, rating
- http://www.stevebadger.com/poker/dramaha/ — Dramadugi strategy
- https://cardplayerlifestyle.com/poker-tips-strategy/mixed-game-poker-rules/ — "Drawmaha-Dugi" rules
- https://www.cardplayer.com/cardplayer-poker-magazines/66506-chad-eveslage-36-2/articles/24732-the-coach-s-game-at-resorts-world-part-1 — "Drawmaha Low-Dugi" in Coach's mix
- https://phenompoker.com/blog/mixed-games-rules/ — DramaDugi in Super Circus mix
- https://redchippoker.com/lob-poker-omaha-badugi/ — original LOB 4-card three-draw game

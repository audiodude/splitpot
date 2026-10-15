---
slug: sick-o
name: Sick-O
abbrevs: []
nicknames: ["Sick-o"]
family: board
wins: [high, low-27]   # low half = 2-7 ranking with a 9 qualifier (see Showdown)
usualStructure: [limit, pot-limit]   # [INFERENCE] WSOP names no structure
holeCards: 4
draws: 0
players: "2-8 (WSOP maximum 8)"
parent: omaha-hi-lo
canonicalSource: "WSOP 2026 Live-Action Rules (Caesars Entertainment), 'SICK-O (8 Participant maximum)' — the only source found"
---
## Deal & structure
- WSOP text: "All the rules of Omaha High-Low apply to Sick-o" except the low half. So: four hole cards, standard Omaha board (flop, turn, river, burns as in Omaha), two-hole-cards-plus-three-board-cards rule, blinds and betting as in the game format chosen. Eight players max.
- WSOP gives no betting structure for Sick-O. [INFERENCE] It would be played in whatever structure the Dealer's Choice game uses (Omaha Hi-Lo is typically limit or pot-limit).

## Showdown / what wins
- Pot is split into a high half and a low half like Omaha Hi-Lo; the high half is ordinary Omaha high.
- WSOP wording for the low: it "has a 9 qualifier and is played as a 2-7 hand. When playing low, Aces are high, straights and flushes count against you."
- Reading that precisely:
  - Low is five cards (exactly two hole + three board), ranked **2-7 (Kansas City) style**: lowest hand wins, ace is always high, straights and flushes (and pairs) make the hand worse. Best possible low is 7-5-4-3-2 not all of one suit (not a straight: 2-3-4-5-7 is not a straight).
  - A "9 qualifier" means the low half is only awarded if a hand is nine-high or better. [INFERENCE: "9 qualifier" read in the 2-7 sense: the highest card in the qualifying five-card low must be 9 or lower, with no pair, no straight, no flush. Under that reading the worst qualifying hand is 9-8-7-6-4 (9-8-7-6-5 is a straight and would not qualify). WSOP does not state this explicitly, nor whether a paired or straight/flush hand can qualify.]
  - Exactly-two-hole-cards rule applies to the low too (Omaha Hi-Lo rules are said to "apply"). A player may use different hole cards for high and low.
- If no hand qualifies for low, the best high hand wins the whole pot (inherited WSOP Omaha Hi-Lo rule: "The best high poker hand wins the entire pot if there is no qualifying hand for low").
- Ties/odd chip: inherited from WSOP Omaha Hi-Lo and general rules (high hand gets the odd chip in a high/low split; ties within a half split evenly; odd chip between tied low hands awarded as in a low type of that game).
- Because aces are high and straights/flushes hurt, A-2 hole cards are **not** premium for the low; the strong low hole cards are deuces through sevens that don't form straights or flushes with the board.

## Rooms disagree
- Nothing to compare: I found no second source. Searches for "Sick-O" (several phrasings, WSOP/mixed-game/dealer's choice) returned nothing relevant. Generic Omaha Hi-Lo variants with a 9 or 7 "ceiling" exist (poker.fandom.com Omaha hold 'em; Replay Poker/casino.org O8 help describe 9-or-7 qualifiers), but those are ace-to-five lows, a different thing from Sick-O's 2-7 low.
- Ambiguity within the WSOP text (see above): the exact meaning of "9 qualifier" under 2-7 rules is not defined.

## Common newcomer mistakes
- Playing the low as ace-to-five (ace low, wheel best). In Sick-O ace is high and 5-4-3-2-A is just an ace-high hand.
- Forgetting straights and flushes ruin a low (e.g. 2-3-4-5-6 is a straight, not a great low).
- Treating it as qualify-8-or-better; the qualifier is looser (9) but lows are also harder to make because of the 2-7 rules.
- Using the Omaha Hi-Lo habit of A-2 as the key hand.

## Lore & reputation
- Appears only in the WSOP 2026 Live-Action Rules (Dealer's Choice-style list of Omaha variants). I found no room rule sheet, festival list, or article describing it. Treat as a niche/novelty game; evidence it is spread in rooms is limited to the WSOP rule sheet naming it. The Cardplayer Lifestyle Mixed Game Festival list does not name it.
- Name looks like a pun on "Omaha" + "sick" (2-7 lowball nickname context). [INFERENCE — unsourced.]

## Related games
omaha-hi-lo, omaha-hi-lo-regular, 2-7-triple-draw, big-o

## Sources
- /tmp/wsop.txt lines 1099-1103 — WSOP Sick-O rule text
- /tmp/wsop.txt lines 1030-1034 — WSOP Omaha Hi-Lo qualifier, no-low scoop
- /tmp/wsop.txt lines 737-750 — odd chip rules for hi-lo splits
- https://cardplayerlifestyle.com/poker-tips-strategy/mixed-game-poker-rules/ — festival variant list; Sick-O absent
- web searches (several) — no corroborating source for Sick-O

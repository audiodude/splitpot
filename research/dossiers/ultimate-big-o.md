---
slug: ultimate-big-o
name: Ultimate Big O
abbrevs: [UBO, DBO8 Best/Best]
nicknames: ["Double Board Big O", "Double Board Omaha Ultimate High/Low (Best/Best)", "Double-board Big O hi-lo"]
family: board
wins: [high, low-8-or-better]   # one high winner + one low winner across BOTH boards (2-way split, not 4-way)
usualStructure: [limit, pot-limit]
holeCards: 5
draws: 0
players: "2-8 (WSOP maximum 8)"
parent: big-o
canonicalSource: "WSOP 2026 Live-Action Rules (Caesars Entertainment), 'ULTIMATE BIG O (8 Participant maximum)'"
---
## Deal & structure
- Big O deal: five hole cards each, blinds (or ante/blind combinations as for other WSOP button games), preflop betting. WSOP says Ultimate Big O "follows all standard Big O rules" with the double-board modification (which is why the text has no separate betting-structure line; Big O itself is normally pot-limit — see Rooms disagree for limit).
- Two community boards are dealt, one above the other (CPL calls them "top" and "bottom" runouts). Each board gets a flop (3), turn (1), river (1) — 10 board cards total.
- WSOP burn rule for Ultimate Big O: one burn before the flop; **no burn before the final card if it completes the board**. The generic WSOP Double Board Omaha text (high-only sibling) deals the second board's cards directly beneath the first with no extra burn, burning once per street before the first board's cards. [INFERENCE: Ultimate Big O follows the same one-burn-per-street procedure, because it "follows standard Big O rules" and WSOP gives no separate procedure.]
- Why the "no burn on a completing river" line exists (my arithmetic, not WSOP text): at 8 players, 40 hole cards + burn + 6 flop cards + burn + 2 turn cards leaves exactly 2 cards in the stub, so the two river cards must be dealt with no burn. At 7 or fewer players the deck is not exhausted.
- WSOP premature-river rule: with 2 cards left in the stub, the last card in the deck, the premature card, the burns, and the muck are reshuffled.
- Ante variant: if played with an ante and the worst-position (first seat left of the button) player fails to play, the button passes to the next player who posted on the previous hand.
- WSOP also says the game "may also be played as a bomb pot variant" (all post an ante, no preflop betting). The WSOP text gives no further procedure for the Ultimate Big O bomb pot; the separately listed WSOP "5 Card Double Board Bomb Pot PLO" is a different game (pot split top board / bottom board, high only) — do not conflate. [INFERENCE: an Ultimate Big O bomb pot uses the Ultimate Big O showdown with ante, no preflop action, no flop burn, action starting left of the button, by analogy to the bomb-pot rules.]

## Showdown / what wins
- Each player forms hands the Omaha way: **exactly two** hole cards plus **exactly three** cards from **one** board (never mixing cards across the two boards in a single five-card hand). The same applies to the low.
- WSOP: the best high hand on **either** board gets half the pot; the best qualifying low hand (if any) on **either** board gets the other half. If nobody makes a qualifying low, the best high wins the whole pot.
- Qualifying low (WSOP Omaha Hi-Lo rule inherited): five cards of different ranks, all 8 or lower; ace plays high or low; straights and flushes do not count against the low; best low is 5-4-3-2-A.
- Practical consequence: it is a **two-way** split (one high winner, one low winner) over the whole game — not four ways. One player can win both halves (scoop).
- A player's high and low may come from **different boards** and different hole-card pairs (CPL: "they may use one runout to make their best high hand and the other to get their best possible low"). They may also take both halves from the same board.
- Cross-board counterfeiting: your low is judged against the best low anywhere. A-2 on one board does not guarantee the nut low, because the *other* board may supply a better (or equal) low to another player; and a board that pairs your ace or deuce counterfeits you only on that board — you may still have a low on the other (2+2 thread summary via search result: "having A2 does not mean you have nut low because the other board could make a non-A2 hand the nut low").
- A low qualifies per board: if neither board has three distinct cards 8-or-lower, no low exists anywhere and high scoops. If only one board has a possible low, the low half is contested only on that board.
- Ties: if two players tie for high, that half is split; likewise for low. Odd chip (WSOP general rule 153): in high-low split games the high hand receives the odd chip in a high/low split; ties within a half follow the position procedure for the game. WSOP Mixed Games odd-chip note: button games, odd chip goes to the worst position. [Precise odd-chip handling for ties inside the high half of this specific game is not spelled out for Ultimate Big O in the WSOP text.]
- Ace treatment: ace is high or low for the player's benefit, as in Omaha Hi-Lo.

## Rooms disagree
- **Two-way (Best/Best) vs four-way (board-by-board).** WSOP and Cardplayer Lifestyle's Mixed Game Festival rule list use "ultimate" scoring (best high anywhere, best low anywhere). Steve Badger's "Double Board Omaha" strategy page describes double-board **high-low** as commonly "splitting the pot four ways" (each board its own hi/lo split; "splitting the low three ways on one board gets you 1/12 of the pot"). So "double-board hi-lo" is ambiguous in the wild — ask which version. Ultimate Big O = the two-way version.
- **Betting structure:** WSOP inherits Big O (pot-limit). The 2+2 thread title and PokerAtlas/Mixed Game Festival-style usage include **limit** double-board Big O in mixed rotations.
- **Burn procedure** for the second board is described in the WSOP sheet only for the high-only Double Board Omaha (no burn between boards); the Ultimate Big O entry only states the flop burn and the completing-river exception.

## Common newcomer mistakes
- Assuming the board with the better-looking low decides everything; you only need *some* board to give you the best low, and a different board can give you the best high.
- Mixing cards from the top and bottom board into one hand (illegal).
- Using more or fewer than two hole cards.
- Believing A-2 is automatically the nut low: the other board can give another player an equal or better low, so your own board looking great does not guarantee the low half (an equal low means the low half is split).
- Forgetting there may be no qualifying low on either board, in which case high scoops.
- Confusing it with 5-card double board bomb pot PLO (high-only, split by board).

## Lore & reputation
- Appears by name in the 2026 WSOP Live-Action Rules (8-handed max). Cardplayer Lifestyle lists "Double Board Omaha Ultimate High/Low (Best/Best)" among variants played at its Mixed Game Festival. I found no 2026 WSOP bracelet event titled "Ultimate Big O" (searches returned only Big O and double-board PLO events), so its WSOP presence is as a Dealer's Choice option. [uncertain: which Dealer's Choice events use it]
- The 2+2 thread "Starting Hand Tips for Double Board Limit Big O" (Omaha 8 forum, ~87 months old per search metadata) shows limit double-board Big O being played in casinos; the page returned HTTP 403 when opened, so its content was only seen through search-result snippets.
- Steve Badger notes double-board is "most commonly played as part of a mix of games, meaning it is typically seven-handed maximum".

## Related games
big-o, omaha-hi-lo, double-board-omaha, bomb-pot, 5-card-plo, big-easy

## Sources
- /tmp/wsop.txt (WSOP 2026 Live-Action Rules) lines 1041-1097 — Ultimate Big O, Double Board Omaha, burn rules
- /tmp/wsop.txt lines 1030-1034, 727-750 — Omaha Hi-Lo qualifier; odd chip rules
- https://cardplayerlifestyle.com/poker-tips-strategy/mixed-game-poker-rules/ — Best/Best description, festival list
- https://www.stevebadger.com/poker/omaha/double-board/ — four-way hi-lo split, mixed-game note
- https://mixedgamemasters.com/strategy/double-board-omaha/double-board-faq/ — double-board basics, where spread (Aria, Commerce, Bicycle)
- https://www.pokerskill.com/blog/big-o-poker-rules-and-strategy/ — Big O baseline rules
- 2+2 thread (forumserver.twoplustwo.com/44/omaha-8-a/starting-hand-tips-double-board-limit-big-o-1749643/) — 403; seen only via search snippets

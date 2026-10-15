---
slug: double-board-omaha
name: Double Board Omaha
abbrevs: [DBPLO, Double Board PLO, 2-board PLO]
nicknames: ["Double-board Omaha high", "Double-flop PLO", "top board / bottom board PLO"]
family: board
wins: [high]
usualStructure: [pot-limit]
holeCards: 4
draws: 0
players: "2-8"
parent: pot-limit-omaha
canonicalSource: "WSOP/Caesars 2026 Live-Action Rules, '\"Double Board Omaha\" Omaha High-Variation (8 Participant maximum)'"
---
## Deal & structure
- Four hole cards per player, button + blinds (WSOP: one blind, multiple blinds, ante, or blinds + ante) with an initial betting round. Then **two boards** are dealt, one under the other:
  1. Burn, deal the first flop (3 cards). **Second flop (3 cards) dealt immediately below, no burn.** Betting.
  2. Burn, turn on board 1; second turn directly beneath on board 2 **without another burn**. Betting.
  3. Burn, river on board 1, second river beneath on board 2, no extra burn. Final betting.
- WSOP caps it at **8 players** and notes it may also be played as a bomb pot (no blinds, ante, no pre-flop betting). [INFERENCE, my arithmetic] Eight players use 32 hole cards + 7 (burn + two flops) + 3 + 3 = 45 cards, so a 9th player would also fit in 52 cards (49); 8 is WSOP's house cap, not a deck limit.
- Betting is pot-limit (it is PLO; WSOP's entry says standard Omaha High rules apply unless otherwise specified).
- In streamed games and rooms like The Lodge double-board PLO is most often seen as a **bomb pot** (casino.org, The Lodge). See `bomb-pot` and `5-card-double-board-bomb-pot-plo` for the ante-only, no-pre-flop-action structure. WSOP's bomb-pot game uses a no-burn flop because there is no pre-flop action; The Lodge runs all its bomb pots as double-board.

## Showdown / what wins
- Each board is its own Omaha hand: **exactly two of your four hole cards plus exactly three cards from that one board.** You may not combine cards from both boards in one hand (WSOP).
- **The pot is split between the best hand on the top board and the best hand on the bottom board** (stated outright in WSOP's 5-card double board bomb pot entry, which says it follows "all the rules of double board Omaha"; confirmed as the common live practice by The Lodge, PLOMastermind, casino.org). One player can win both boards and scoop. If one player wins one board outright and ties another player on the other board, they take 75% and the other player 25% (PLOMastermind: "a ¾ to ¼ split"). Ties within a board split that board's half.
- You may use the same two hole cards on both boards or different pairs; each board is evaluated independently.
- Cards on one board are dead for the other board (the same deck supplies both boards), which matters for equity calculations (PLOMastermind/ZeroTilt explainers).
- Odd chip: not specified by WSOP for the double-board split. TDA's general rule (board games with 2+ tied high hands): first seat left of the button. WSOP's run-it-twice rule awards the extra chip to the main board.

## Rooms disagree
- **Whether the pot is split by board or the single best hand wins everything.** WSOP's Double Board Omaha paragraph only says each player makes a five-card hand from exactly three cards of one of the two boards, and does not itself state a split; its 5-card bomb-pot entry and Ultimate Big O entry state a split (half each board). Wikipedia's Texas hold 'em article describes double-board hold'em as either half per board or the best overall hand taking the whole pot, "depending on the rules agreed upon by the players". The common live rule (The Lodge, casino.org, PLOMastermind) is **half per board**.
- **Blinds vs ante.** WSOP's base game uses blinds/ante with a normal pre-flop round; most live use is the ante-only bomb-pot form.
- Naming of boards ("top/bottom" at The Lodge, where bottom is closest to the dealer).
- Burn cards: WSOP no extra burn for the second board; confirm locally.

## Common newcomer mistakes
- Betting as though you have one hand: your equity is the average of the two boards (PLOMastermind example: 70% on top and 10% on bottom is about 40% overall; a balanced 55/55 is better than 90/10 because of quartering risk per ZeroTilt/PLOMastermind).
- Forgetting you must use exactly two hole cards on each board.
- Overvaluing hands that win only one board with no backup equity (casino.org).
- Winning only one board and thinking you won everything; winning one board outright and losing the other gets you 50% at most, and sharing that winning board drops you to 25%.

## Lore & reputation
- Streamed live PLO games (Hustler Casino Live per casino.org) and Texas rooms like The Lodge (whose own page calls bomb pots a staple of Texas poker rooms) made double-board bomb pots a signature live format. PLOMastermind describes the format as "taking the live poker scene and online platforms by storm"; treat that as explainer hype.
- WSOP's 2026 live-action rules give it a dedicated 8-max entry plus three descendants (5-card bomb pot, Ultimate Big O, Derailment), indicating it is a regular live offering, not just online.
- Wikipedia's "Community card poker" article describes double-board hold'em (half the pot to the best hand on each board), and its "Texas hold 'em" article says the winner is either chosen per board or the best overall hand takes the whole pot, depending on the rules agreed upon by the players. Neither gives a date.

## Related games
bomb-pot, pot-limit-omaha, 5-card-double-board-bomb-pot-plo, derailment, ultimate-big-o (other dossier)

## Sources
- /tmp/wsop.txt (WSOP 2026 live-action rules PDF) - Double Board Omaha, 5 Card Double Board Bomb Pot PLO, Ultimate Big O, Derailment
- https://thelodgepokerclub.com/what-is-a-poker-bomb-pot/ - The Lodge double-board PLO bomb pot, top/bottom boards, example
- https://www.casino.org/blog/what-is-a-bomb-pot-in-poker/ - double board bomb pot formats and mistakes
- https://plomastermind.com/double-board-plo-bomb-pots/ - split/quarter outcomes, equity averaging
- https://en.wikipedia.org/wiki/Community_card_poker - double-board hold'em (half pot per board)
- https://en.wikipedia.org/wiki/Texas_hold_%27em - double-board hold'em, either split rule
- https://www.pokertda.com/view-poker-tda-rules/ - odd chip rule for board games
- https://zerotiltpoker.com/strategy/double-board-plo-bomb-pot-strategy-rules-guide/ - search snippet only (not fetched)

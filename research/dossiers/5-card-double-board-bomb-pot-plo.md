---
slug: 5-card-double-board-bomb-pot-plo
name: 5 Card Double Board Bomb Pot PLO
abbrevs: [5-card DB bomb pot, PLO5 double board bomb pot]
nicknames: ["Double board PLO5 bomb pot"]
family: board
wins: [high]
usualStructure: [pot-limit]
holeCards: 5
draws: 0
players: "2-8"
parent: double-board-omaha
canonicalSource: "WSOP/Caesars 2026 Live-Action Rules, '5 Card Double Board Bomb Pot PLO (8 Participant maximum)'"
---
## Deal & structure
WSOP text: all the rules of Double Board Omaha apply with these changes:
- **Five** hole cards per player, **two boards**.
- **No blinds.** Every player posts an **ante**, and **no action occurs pre-flop**. After the antes, hole cards are dealt, then both flops. Betting starts **left of the button after the flop** (WSOP).
- **No burn card for the flop** (no pre-flop action). The turn and river still get one burn each; the second board's cards come directly beneath the first without extra burns (as in `double-board-omaha`).
- Table size: **8 players maximum**. [INFERENCE, my arithmetic] With eight players the deck is fully used: 8 x 5 = 40 hole cards + 6 flop cards + (burn + 2 turn cards) + (burn + 2 river cards) = 52. WSOP confirms: "the last card of the deck will be used to complete the river when there are 8 players to start the hand."
- Premature river with only two cards left in the stub: the last card in the deck, the premature card, the burns and the muck are reshuffled (WSOP).
- If a player does not play the worst position (first seat left of the button), the button passes to the next player who posted on the previous hand (WSOP).
- Pot-limit betting after the flop (it is PLO5); pot-limit sizing as in `pot-limit-omaha`.
- Run-it-twice note: WSOP's run-it-twice rule has a special line for 5-card PLO with eight players dealt in: only two burn cards are used when running it twice pre-flop, one per board.

## Showdown / what wins
- **High hand only.** On each board, use **exactly two of your five hole cards and exactly three cards from that board** (WSOP: Omaha rules; cards from the two boards cannot be combined).
- **The pot is split between the best hand on the top board and the best hand on the bottom board** (WSOP: "This game is played with an ante and no action pre-flop"). A player can scoop by winning both; ties split that half.
- Odd chip: not specified by WSOP for this split game; TDA's default for board games with several tied high hands is the first seat left of the button.

## Rooms disagree
- This is a WSOP-named game; no other room rule sheet found. Elsewhere a double-board bomb pot is a normal bomb pot (see `bomb-pot`) with local ante size; The Lodge (Austin) uses the 4-card version and a bomb-pot button. PLOMastermind's guide has a section on 5-card and 6-card double-board bomb pots, so it is played outside WSOP, but I could not find a room rule sheet for 5-card specifics.
- **WSOP's ante default** for bomb pots in time-raked games is $20 (1-2-5) or $25 (5-5 and up) if players cannot agree (rule 31).
- Posted maximum seats vary by deck math; with 5 hole cards eight is the practical live maximum.

## Common newcomer mistakes
- Treating it like a regular PLO5 hand with pre-flop betting; there is none. Everyone sees both flops with random five-card hands.
- Forgetting a pot-limit pot already contains all the antes (a pot-sized first bet is large).
- Using the same board for both hands or trying to mix cards across boards (not allowed).
- Over-valuing one-board hands (see `double-board-omaha`).

## Lore & reputation
- WSOP lists it in a block of bomb-pot-style Omaha games (Double Board Omaha, Ultimate Big O, Derailment, Courchevel) in its 2026 live-action rules; no history found. [INFERENCE] A game named in a live room rule sheet is presumably spread in at least some live rooms.
- PLOMastermind (a PLO training site) calls double-board bomb pots a rapidly growing format and mentions 5- and 6-card versions; treat as explainer commentary.

## Related games
double-board-omaha, bomb-pot, 5-card-plo, derailment, courchevel

## Sources
- /tmp/wsop.txt (WSOP 2026 live-action rules PDF) - 5 Card Double Board Bomb Pot PLO, rule 31, run-it-twice 5-card PLO
- https://plomastermind.com/double-board-plo-bomb-pots/ - double-board bomb-pot rules; mentions 5/6-card versions
- https://thelodgepokerclub.com/what-is-a-poker-bomb-pot/ - The Lodge bomb-pot procedure (4-card)
- https://www.pokertda.com/view-poker-tda-rules/ - odd chip default for board games

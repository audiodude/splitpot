---
slug: derailment
name: Derailment
abbrevs: []
nicknames: ["Three-board PLO bomb pot", "Numberwang (one UK home game's name)", "a twist on Gods Game (forum)"]
family: board
wins: [other]   # best hand on each of the two surviving boards; pot chopped between the two boards (see below)
usualStructure: [pot-limit]
holeCards: 4    # [uncertain] WSOP does not state; 4 is the only count that fits 8 players with 3 boards
draws: 0
players: "2-8"
parent: 5-card-double-board-bomb-pot-plo
canonicalSource: "WSOP/Caesars 2026 Live-Action Rules, 'DERAILMENT (8 Participant maximum)'"
---
## Deal & structure
WSOP's whole entry: "All the rules of double board bomb pot apply with the following changes: three boards will be used until the river. The lowest card by suit on the river will have that entire board taken out of play. The pot will be chopped between the best hand on the two boards remaining."
- So it is a **bomb pot** (ante, no pre-flop action, flop dealt immediately; see `bomb-pot`) with **three boards** (three flops, three turns, three rivers) instead of two.
- Pot-limit, Omaha-style hands (exactly two hole cards + exactly three board cards per board; Poker Chip Forum summary: "you must use two cards per remaining board").
- 8 players maximum (WSOP).
- Hole-card count is **not stated**. WSOP's entry sits directly after the 5-card double-board bomb pot, which could imply five, but [INFERENCE, my arithmetic] 8 players x 5 hole cards + 9 flop + 3 + 3 board cards = 55 cards, more than a 52-card deck, whereas 4 hole cards uses 32 + 9 + 3 + 3 = 47. Treat 4 as likely but unconfirmed. (A different UK home game, "3D", described by a forum poster deals 4 hole cards and 3 boards but requires 2 hole cards + 1 card from each board; that is not Derailment.)

## Showdown / what wins
- After all three rivers are out, the board whose **river card is the lowest** is eliminated ("derailed"); the pot is then **chopped between the best hand on each of the two remaining boards**.
- A player who wins both surviving boards scoops; one who wins one board gets half; ties split that half.
- **"Lowest card by suit"** is ambiguous in WSOP's text: it presumably means lowest river card by rank, with a suit-order tie-break for equal ranks, but the suit order is not given. [INFERENCE: standard poker suit order clubs < diamonds < hearts < spades is the likely tie-break; unconfirmed.]
- Forum polls discuss *when* to remove the eliminated board: immediately after the third river is dealt, after a short pause, or leaving all three on the table for players to think (a UK/US home-game procedural question; no official rule).

## Rooms disagree
- Only two kinds of source: the WSOP rules and home-game forum threads. A forum list of "circus game" rotations (search snippet) calls it "a twist on the classic Gods Game" with three boards where the lowest-river-card board is removed. Another forum snippet (New Circus Games Discussion) shows a different home-game variant with a standard discard bottom board, so name usage varies at home tables.
- Timing of board removal: not specified in WSOP.

## Common newcomer mistakes
- Putting money in on a board that may be derailed: any one of your boards can vanish, so your equity depends on the river ranks across all three boards.
- Forgetting the pot is chopped across the surviving boards, not won by one best hand.
- Ignoring that the lowest *river card* matters (not the lowest board), including suit tie-breaks.

## Lore & reputation
- It is named in WSOP's 2026 live-action rules, so it can legitimately be called in a WSOP dealer's-choice/bomb-pot context, but I found no evidence it is a regular cash-room game. Third-party evidence is limited to the Poker Chip Forum home-game threads ("Derailment clarification", "Your BEST 6 PL circus game rotation?"), where it is listed as a PLO "circus game" with "much pain". Treat as a novelty/bomb-pot extension.
- Included here only because WSOP names it; if the site wants to keep scope tight, a one-paragraph mention under `bomb-pot` is enough.

## Related games
bomb-pot, double-board-omaha, 5-card-double-board-bomb-pot-plo

## Sources
- /tmp/wsop.txt (WSOP 2026 live-action rules PDF) - Derailment entry
- https://www.pokerchipforum.com/threads/derailment-clarification.113691/ - home-game timing of removing the derailed board
- https://www.pokerchipforum.com/threads/bomb-pot-timing-structure.110280/ - UK home game "3D" (3 boards, 2 hole + 1 per board)
- https://www.pokerchipforum.com/threads/your-best-6-pl-circus-game-rotation/94430/ - search snippet only: "Derailment - a twist on the classic Gods Game"

---
slug: no-limit-holdem
name: No-Limit Texas Hold'em
abbrevs: [NLHE, NLH, NL Hold'em]
nicknames: ["Hold'em", "Texas Hold'em", "the Cadillac of poker (Doyle Brunson, per Wikipedia)"]
family: board
wins: [high]
usualStructure: [no-limit]
holeCards: 2
draws: 0
players: "2-10"
parent: null
canonicalSource: "WSOP/Caesars 2026 Live-Action Rules, Section VII Texas Hold'em + No-Limit rules 173-187"
---
## Deal & structure
- Dealer button; small blind left of the button, big blind left of that (WSOP: one blind, several blinds, antes, or blinds + antes are all allowed). Each player gets two face-down hole cards. Betting, burn + 3-card flop, betting, burn + turn, betting, burn + river, final betting round, showdown.
- Pre-flop action starts left of the big blind; post-flop action starts with the first live player left of the button (Wikipedia, PokerNews).
- **Heads-up:** the button posts the small blind and acts first pre-flop; after the flop the button acts last (WSOP rule 157; Wikipedia).
- **No-limit betting (WSOP rules 173-187):** bet or raise any amount up to your whole stack (table stakes). Number of raises unlimited. Minimum bet is the big blind; a raise must be at least the size of the previous bet or raise in that round. All-in for less than a full raise is allowed but does not by itself give players who already acted a new raise option unless the cumulative all-ins reach a full raise (rules 175, 177). "Completing" a bet is a limit-only concept (rule 176). A raise may not be made in multiple motions unless the amount was verbally declared first (rule 178); a verbal declaration is binding (rule 135).
- Live straddle (WSOP rules 22/165): optional, usually 2x the big blind, posted UTG or on the button, straddler gets last action pre-flop; room limits apply (e.g. $1-$2-$5: one straddle capped at $10).
- WSOP buy-in rule of thumb: min 20-40x BB, max 40-100x BB (rule 186).
- **Run it twice / three times** (WSOP rules 208-217): allowed in time-raked flop games and $5-$10 NLHE if everyone remaining in the pot agrees, at least one player is all-in, and no action is pending; the first board plays to completion normally; the odd chip in a split goes to the main board. WSOP does not condone insurance or other side "proposition" bets (rule 187).
- Bomb pots and double-board games are covered in `bomb-pot` and `double-board-omaha`; WSOP rule 31 defines a bomb pot as an agreed equal ante, hole cards dealt, flop put out, normal play from there.

## Showdown / what wins
- Best five-card poker hand from any five of the seven available cards (two hole cards + five board cards). Zero, one or two hole cards may be used; "playing the board" is legal, but you must still show your hole cards (WSOP rule 172). High hand only; standard rankings; ace high or low in straights.
- Ties split the pot; the odd chip goes to the first seat clockwise from the button (WSOP rule 153; TDA agrees: odd chip to the first seat left of the button for board games with multiple tied high hands).
- Side pots are split in reverse order of formation (WSOP).

## Rooms disagree
- **Minimum raise and short raises.** WSOP rule 183: an under-minimum raise must be brought up to the legal minimum, but an unintentional over-call is not a raise unless the excess is at least half a bet. TDA raise rule: a raise of 50% or more of the largest prior bet but less than a full raise must be made a full minimum raise; under 50% is a call unless "raise" was declared or the player is all-in. Close, not identical.
- **String raises.** TDA: raising must be made in one motion or with a declared amount; two-motion raises were eliminated in 2019. WSOP similarly allows a "raise" statement with a declared amount.
- **Straddle on the button / re-straddles** are room-specific (WSOP allows UTG or button straddle in blind games except limit and re-straddles at larger games).
- **Run-it-twice permission** is a room option (WSOP restricts it as above; many rooms ban it).
- Bomb pots (hourly/per dealer change) are the room's call, not a core rule (see `bomb-pot`).

## Common newcomer mistakes
(for a Hold'em player visiting a mixed game; this is the baseline game so mistakes are about structure)
- Min-raise confusion: the raise must be at least the size of the last bet/raise, not the total.
- Forgetting a short all-in does not necessarily reopen the betting for someone who already acted.
- Assuming limp-straddle and ante conventions from home games carry over to a live room (see straddle caps).
- Not showing hole cards when playing the board (WSOP rule 172: you may forfeit a claim to the pot).

## Lore & reputation
- Wikipedia: the Texas Legislature officially recognises Robstown, Texas as the birthplace (early 20th century); Hold'em reached Las Vegas in 1963 (California Club, introduced by Corky McCorquodale) and reached the Golden Nugget, Stardust and Dunes; the WSOP began in 1970 at Binion's Horseshoe and the main event became no-limit hold'em. Moneymaker's 2003 win and the hole-card camera are the commonly cited drivers of the 2000s poker boom, after which hold'em replaced seven-card stud as the most common US casino game.
- In mixed rotations it is the "H" in H.O.R.S.E. (limit) and the NL slot in the 8-game/10-game mixes (the WSOP Poker Players Championship 10-game mix uses no-limit hold'em with antes; Wikipedia).

## Related games
limit-holdem, pot-limit-omaha, short-deck-holdem, pineapple, crazy-pineapple, bomb-pot

## Sources
- /tmp/wsop.txt (WSOP 2026 live-action rules PDF) - Texas Hold'em, no-limit rules, run-it-twice, odd chip, straddle
- https://en.wikipedia.org/wiki/Texas_hold_%27em - history, rules, structures
- https://www.pokertda.com/view-poker-tda-rules/ - raise, odd chip, string-bet rules
- https://www.pokernews.com/poker-rules/texas-holdem.htm - quick-start deal and betting order
- https://www.pagat.com/poker/variants/texasholdem.html - procedure, burns, pineapple family
- https://en.wikipedia.org/wiki/The_Poker_Players_Championship - NLHE with antes in 10-game mix

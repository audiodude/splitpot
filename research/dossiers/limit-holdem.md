---
slug: limit-holdem
name: Limit Texas Hold'em
abbrevs: [LHE, Fixed-Limit Hold'em, FLHE]
nicknames: ["Limit", "Fixed-limit Hold'em", "the 'H' in H.O.R.S.E."]
family: board
wins: [high]
usualStructure: [limit]
holeCards: 2
draws: 0
players: "2-10"
parent: no-limit-holdem
canonicalSource: "WSOP/Caesars 2026 Live-Action Rules: Section VII Texas Hold'em + limit-poker rules 104, 130-133 and Kill Pots"
---
## Deal & structure
- Dealt and played exactly like `no-limit-holdem` (two hole cards, burn + flop, turn, river, four betting rounds, button + two blinds). Only the betting is fixed.
- **Fixed bet sizes:** pre-flop and flop use the **small bet** (equal to the big blind); turn and river use the **big bet**, twice the small bet (Wikipedia, PokerListings). Example $4/$8: BB is $4, bets and raises are $4 pre-flop/flop and $8 on turn/river.
- A raise is the previous bet plus the governing limit (PokerListings). The small blind is half the big blind; PokerListings notes rooms round the small blind down for stakes like $5/$10 (a room-specific detail).
- **Raise cap (WSOP rule 130):** with three or more players not all-in, a betting round allows **one bet plus four raises**. Straddles do not count as a bet for the pre-flop cap. **Unlimited raises are allowed when a betting round begins heads-up** (rule 131); if a round starts with more than two players and drops to heads-up mid-round the cap still applies.
- **Short all-in (WSOP rule 133):** an all-in of less than half a bet does not re-open the betting to players who have already acted; half a bet or more counts as a full bet/raise. TDA uses the same half-bet idea ("at least 50% of a full bet or raise is required to re-open betting").
- **Buy-in and posting (WSOP rule 104):** full buy-in is 10x the small bet; new players entering a limit game must post the big blind to get a hand. **Button straddles are not permitted in limit games** (rule 22/165).
- **Kill pots** (WSOP Kill Pots section): a "full kill" is a kill blind of double the big blind that doubles the betting limits; a "half kill" is 1.5x and the limits increase by that amount. Typically used in lowball and Hi-Lo games; in WSOP's rules the high-low kill is triggered by scooping a pot at least 5x the upper limit. Rooms may or may not run kills in limit Hold'em.

## Showdown / what wins
- Same as NLHE: best five of seven, any combination, high only; ties split; odd chip to the first seat clockwise from the button; side pots split separately.
- Hand value inflation differs from NLHE because you cannot be pushed off hands by large bets: you play closer to showdown with more drawing hands (Wikipedia/PokerListings strategy notes: "structure invites drawing hands", you should usually bet/raise with the best hand).

## Rooms disagree
- **Raise cap.** WSOP: one bet + four raises (unlimited heads-up when the round starts heads-up). PokerListings states a cap of one bet + three raises, with unlimited raising when only two players remain. TDA says there is a cap on raises "even when heads-up until the event is down to 2 players; the house limit applies", i.e. leaves the number to the room. The cap is a **house rule**; check it.
- **Small blind amount** and exact limit numbers (e.g. $6/$12, $8/$16) vary by room; kills/half-kills are optional.
- **Half-bet rule** for all-ins is shared by WSOP and TDA.

## Common newcomer mistakes
- Thinking you can bet any amount. In limit you only bet/raise exactly the small or big bet; NLHE habits (min-raising, pot sizing) are irrelevant.
- Forgetting the bet size doubles on the turn (not on the flop): small bet on the first two rounds, big bet on the last two.
- Playing like no-limit: with fixed bets draws are cheaper to chase and bluffs less effective (Wikipedia: Doyle Brunson quote that few players rank with the best in both types; PokerListings: need roughly 300x the big bet for a bankroll).
- Not knowing the raise cap, so trying to re-raise once the cap is hit (only call or fold is allowed).

## Lore & reputation
- Wikipedia: limit hold'em "has historically been the most popular form of hold'em found in casino live action games in the United States"; no-limit later overtook it (televised WSOP/WPT main events). For mixed games it is the "H" in H.O.R.S.E. (Wikipedia: H.O.R.S.E. debuted at the WSOP in 2002 with a $2,000 buy-in) and in the WSOP Poker Players Championship's 8-game and 10-game mixes (10-game mix since 2015, includes limit hold'em).
- Wikipedia also notes the University of Alberta's "Cepheus" program (Science, January 2015) which plays heads-up limit hold'em near-perfectly.

## Related games
no-limit-holdem, pot-limit-omaha, omaha-hi-lo (other dossier), pineapple

## Sources
- /tmp/wsop.txt (WSOP 2026 live-action rules PDF) - limit raises 130-133, buy-in 104, kill pots
- https://en.wikipedia.org/wiki/Texas_hold_%27em - structures, history, Cepheus
- https://www.pokerlistings.com/poker-rules/limit-texas-holdem - small/big bet, raise cap of three
- https://www.pokertda.com/view-poker-tda-rules/ - half-bet reopening, raise cap by house limit
- https://en.wikipedia.org/wiki/H.O.R.S.E. - H.O.R.S.E. lineup, debut 2002
- https://en.wikipedia.org/wiki/The_Poker_Players_Championship - 10-game mix includes limit hold'em

---
slug: courchevel
name: Courchevel
abbrevs: [Courchevel PLO, PLO5 with door card]
nicknames: ["Courchevel Omaha", "5-card Omaha with a door card"]
family: board
wins: [high]
usualStructure: [pot-limit]
holeCards: 5
draws: 0
players: "2-8"
parent: 5-card-plo
canonicalSource: "WSOP/Caesars 2026 Live-Action Rules, 'Courchevel (8 Participant maximum)'"
---
## Deal & structure
- It is 5-card Pot-Limit Omaha with one change: the **first flop card is already face up before the first betting round**. Each player gets five hole cards, then one board card is turned, then pre-flop betting happens on top of that visible card (the "door card").
- WSOP wording: after the initial deal the first flop card is opened directly; after pre-flop action the dealer burns a card and deals the other **two** flop cards. **No burn between the deal and the door card.** The rest (flop betting, turn, river, one burn before each) plays as normal Omaha.
- So the board is built as 1 + 2 (flop), then turn, then river: four betting rounds, same as Omaha/Hold'em.
- Blinds as in other Omaha games (small + big blind, optional straddle/extra blinds per room). Typical structure is pot-limit; fixed-limit and no-limit exist online (PokerListings).
- Table size: WSOP caps it at **8 players**. [INFERENCE, my arithmetic] 9 players x 5 hole cards + door + 3 burns + 4 more board cards = 53 cards > 52, so 8 is the natural maximum.
- A pot-limit raise is capped at the pot after you call (standard PLO rule; WSOP pot-limit section). See `pot-limit-omaha`.

## Showdown / what wins
- High hand only. Each player must make a five-card hand using **exactly two of their five hole cards and exactly three of the five board cards** (Wikipedia, PokerListings, Pagat, pokergamedatabase all agree).
- Ordinary poker hand rankings (no short-deck or lowball changes). Aces play high or low in straights (A-2-3-4-5 wheel counts).
- Ties split the pot; odd chip goes by position clockwise from the button in button games (WSOP rule 153).
- The door card is a real flop card, so it is part of every player's three-card flop; it is not a "free extra" board card.

## Rooms disagree
- **Burn before the door card.** WSOP says no burn between the initial deal and the door card. One explainer (Mixed Game Masters) describes the dealer burning a card before exposing it; pokergamedatabase says no burn cards are used for the door card and the remaining board. Pagat only mentions the burn before the last two flop cards. Treat "no burn before the door card, burn before the other two" as the WSOP-style procedure; local rooms may differ.
- **Who acts first pre-flop.** Pokerlistings says action starts with "the player to the immediate left of the button" (loosely worded; with blinds, normal practice is the player left of the big blind). Other sources (Mixed Game Masters) say left of the big blind. Assume standard blind-structure order.
- Hi-lo version exists (PokerListings, Wikipedia); handled in a separate dossier, not here.

## Common newcomer mistakes
- Forgetting the Omaha rule: you cannot play the board or use only one hole card, even though a flop card is already exposed.
- Overvaluing hands that "hit" the door card pre-flop (e.g. trips with a hole pair + the door card); PokerListings warns that trips with little redraw potential need to fill up or see a dry board.
- Treating it like normal PLO5 ranges: knowing a third of the flop shifts hand values before the first bet (PokerListings: it becomes a game of big hands, nut-chasing matters even more).

## Lore & reputation
- Named for the French Alps ski resort. Wikipedia repeats the "urban legend" that bored tourists wanted a poker game nobody had played and invented it. Treat as unverified folklore.
- Wikipedia says it was most commonly played at the Aviation Club de France in Paris (now closed), is popular in France, and has spread to other parts of Europe, notably the UK. Pagat says the same. Wikipedia also notes (as of 2019) hi-lo Courchevel sit-and-gos at micro stakes on PokerStars.
- A single low-quality explainer gives a creation date of 1988-1992; not corroborated by any better source, so I did not rely on it.
- Included by WSOP in its 2026 live-action rules list of Omaha variants, so a live mixed-game table may legitimately call it.

## Related games
5-card-plo, pot-limit-omaha, courchevel-hi-lo (other dossier), 6-card-plo

## Sources
- /tmp/wsop.txt (WSOP 2026 live-action rules PDF) - Courchevel, Omaha, pot-limit, odd chip
- https://en.wikipedia.org/wiki/Omaha_hold_%27em - Courchevel section, history/urban legend
- https://www.pagat.com/poker/variants/omaha.html - Courchevel procedure, popular in France/UK
- https://www.pokerlistings.com/poker-rules/courchevel-poker - rules walkthrough, strategy cautions
- https://pokergamedatabase.com/games/courchevel.html - 2-8 players, no burn claim
- https://mixedgamemasters.com/strategy/courchevel/rules-and-key-differences/ - burn before door card claim
- https://en.wikipedia.org/wiki/Community_card_poker - Courchevel one-paragraph description

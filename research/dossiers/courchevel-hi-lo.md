---
slug: courchevel-hi-lo
name: Courchevel Hi-Lo
abbrevs: [Courchevel 8, Courchevel O8, Courchevel Hi/Lo]
nicknames: ["Courchevel Eight or Better", "5-card O8 with a door card"]
family: board        # board | draw | stud | hybrid
wins: [high, low-8-or-better]
usualStructure: [pot-limit, limit, no-limit]
holeCards: 5
draws: 0
players: "2-8"
parent: courchevel
canonicalSource: "PokerStars Courchevel Hi/Lo rules page (hi-lo version); WSOP 2026 Live-Action Rules, Section VIII 'Courchevel' for the deal procedure (high-only text)"
---
## Deal & structure
- Take Big O (five hole cards, Omaha-style two-from-hand-three-from-board, 8-or-better low; see big-o) and add the Courchevel twist: **the first card of the flop is dealt face up immediately after the hole cards, before any betting**. PokerStars: "different than 5 Card Omaha Hi/Lo in that the first flop card is dealt face-up at the beginning of the hand, before the preflop betting round".
- Sequence: blinds -> five hole cards each -> one board card face up -> **preflop betting** (starts left of the big blind) -> remaining **two** flop cards (so the flop is complete) -> flop betting -> turn -> betting -> river -> betting -> showdown. Postflop action starts with the first active player left of the button.
- Burns (WSOP 2026 text for Courchevel): **no burn** between the deal and the exposed first card; after preflop action the dealer **burns one card** and deals the other two flop cards; normal burns before turn and river [reading of WSOP's "No burn will be utilize between the initial deal and the first community card"]. WSOP caps Courchevel at **8 participants**.
- Structures: PokerStars spreads limit, pot-limit and no-limit Courchevel Hi/Lo (cash and tournaments); pot-limit is the standard for the Omaha family. In limit, bets are the small bet preflop and on the flop, big bet on turn and river (PokerStars).

## Showdown / what wins
- Identical to Big O: half the pot to the best five-card **high** hand, half to the best five-card **8-or-better low**; each made from **exactly two** hole cards and **exactly three** of the five board cards, and the high and low can use different hole-card pairs.
- Low: five different ranks, all 8 or lower; aces low; straights and flushes are ignored; best low is the wheel A-2-3-4-5; compare from the highest card down (6-4-3-2-A beats 6-5-4-3-2). If no hand qualifies for low, the best high takes the whole pot. A hand can scoop both halves.
- Identical hands split that portion equally. Odd chip: high hand gets it in split games under WSOP's general rule (worst position under WSOP's mixed-game "button games" procedure).
- The exposed card matters for qualification: one board card is public pre-betting, so a high door card (9-K) means the other two flop cards need to be low for a low to be possible by the flop, and an 8-or-lower door card keeps lows alive (PokerListings' advice).

## Rooms disagree
- **Burn card before the door card:** WSOP says no burn before the first (exposed) card. Mixed Game Masters says the dealer burns, then exposes the first flop card. Pokergamedatabase says Courchevel uses no burn cards at all. Procedure only matters for card-exposure rules, not for who wins.
- **Who acts first preflop:** PokerStars (blinds game): first player left of the big blind ('under the gun'). PokerListings' write-up says action begins "to the left of the button", which is loose wording for a blinds game and conflicts with PokerStars; follow normal blind order.
- **Max players:** WSOP says 8 for Courchevel; the PokerStars and PokerListings pages I read give no table cap.
- **Is it spread live?** WSOP 2026 rules include Courchevel only in a high-only text, not a hi-lo one. No Las Vegas live game listing for Courchevel (hi-lo or high) was found; the best-documented home for the *hi-lo* version is online: PokerStars has offered it since 2013 per Wikipedia, with micro-stakes hi-lo SNGs "several times a day" as of 2019 (Wikipedia wording).

## Common newcomer mistakes
- Treating the exposed card as a burn: it is a real, *shared* flop card and part of the final board. The flop will not give you three fresh cards.
- Ignoring the door card for low: with, say, a king door card you need two low flop cards to keep a low alive; with a low door card everyone has a live low draw.
- Playing too many pairs: a high pair plus the door card (a board set) is a monster for high, but is very vulnerable to lows in a split game.
- Fixating on second/third nut lows - five-card holdings produce more nut and near-nut lows, so you often quarter or lose (PokerListings warns not to chase second- and third-nut lows).
- Forgetting "exactly two" - a flopped board that gives you a flush or straight needs two hole cards of the right type, same as Omaha.
- Believing straights and flushes spoil the low (they do not).

## Lore & reputation
- Named after the French Alpine ski resort; Wikipedia gives the "urban legend" that bored tourists wanted a game nobody had played, and says the Aviation Club de France in Paris (now closed) was where it was most commonly played. Treated there as popular in France and spreading to the UK.
- Online: PokerStars lists Courchevel Hi/Lo with its own rules page; Wikipedia says PokerStars had Courchevel since 2013 and (as of 2019) ran micro-stakes hi-lo sit-and-gos several times a day.
- A web-search snippet from gamblingngo.com (attributing to BetMGM) says Courchevel "has never appeared in WSOP or any popular poker tournament"; I could not open that page, and the WSOP 2026 live-action rule sheet does define Courchevel, so treat that claim as unreliable.

## Related games
- courchevel (high-only parent)
- big-o (same hands, no door card)
- big-easy
- omaha-hi-lo

## Sources
- https://www.pokerstars.com/poker/games/omaha/courchevel/high-low/ - Hi-lo rules, structures, deal
- https://www.pokerstars.com/poker/games/omaha/5-card-high-low/ - 5-card hi-lo baseline (compared)
- https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf (text at /tmp/wsop.txt) - WSOP Courchevel deal text, odd chip rule
- https://www.pokerlistings.com/poker-rules/courchevel-poker - Courchevel + short Hi-Lo section
- https://www.countingouts.com/courchevel-rules-and-basic-strategy/ - "spit card", played high-only or split
- https://mixedgamemasters.com/strategy/courchevel/rules-and-key-differences/ - burn-before-door-card claim
- https://pokergamedatabase.com/games/courchevel.html - "no burn cards" claim
- https://en.wikipedia.org/wiki/Omaha_hold_%27em (raw) - Courchevel origin, hi-lo availability on PokerStars

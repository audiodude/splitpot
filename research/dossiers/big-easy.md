---
slug: big-easy
name: Big Easy
abbrevs: [Big Easy, 5+ card O8]
nicknames: ["Omaha Hi-Lo 5+ card", "Omaha Hi-Lo with extra hole cards", "6-card O8 (when six are dealt)"]
family: board        # board | draw | stud | hybrid
wins: [high, low-8-or-better]
usualStructure: [pot-limit]
holeCards: "5+ (dealer/room picks; same for every player)"
draws: 0
players: "2-8"
parent: big-o
canonicalSource: "WSOP 2026 Live-Action Rules, Section VIII (Omaha High-Low variation - 5+ card - 'The Big Easy', 8 participant maximum)"
---
## Deal & structure
- **Rule text (WSOP 2026):** all the rules of Omaha High-Low apply, except every player is dealt *at least five* hole cards. More starting cards are allowed "based on the number of participants dealt into the hand", but **all players must start with the same number**. 8 players maximum.
- So Big Easy = Big O (see big-o) where the card count flexes with table size. The board is the usual five community cards with burns and four betting rounds; blinds/antes follow normal Omaha rules.
- How many cards can actually be dealt (my arithmetic, not stated by WSOP) [INFERENCE]: assuming a burn before the flop, turn and river (3 burns) plus 5 board cards = 8 non-hole cards, the deck allows 5 cards up to 8 players (48), 6 cards up to 7 players (50), 7 cards up to 6 players (50), 8 cards up to 5 players (48). That is consistent with WSOP tying card count to the number of players dealt in.
- A secondary, unverified report: a 2012 Two Plus Two thread (search-result snippet only; the page returned HTTP 403 to me) says Big Easy was spread at the Rio during the 2012 WSOP, played as PLO8 in which the **button chooses 4, 5 or 6 cards**, and described it as essentially "6-card PLO8". This contradicts WSOP's "at least five" wording on the minimum - flag as a rooms-disagree note below.
- Betting structure is not specified by WSOP for this game; pot-limit is the norm for Big O-family games [INFERENCE from the Big O sources].

## Showdown / what wins
- Same as Big O / Omaha Hi-Lo: half the pot to best high, half to best qualifying 8-or-better low; **exactly two** hole cards and **three** board cards for each hand (high and low may use different hole-card pairs). If no 8-or-better low exists, best high scoops. A-2-3-4-5 is the nut low; straights/flushes don't count against low.
- Odd chip: in hi-lo split games the high hand gets it (WSOP general rule), or worst position under WSOP's mixed-game procedure for button games.
- The more cards you hold, the more two-card combinations: 5 cards = 10, 6 = 15, 7 = 21, 8 = 28 (simple combinatorics) - nut lows and nut flush/straight draws become near-universal, so only the nuts reliably win.

## Rooms disagree
- **Minimum / number of cards:** WSOP: at least 5, same for all, more allowed as fewer players are dealt in. Unverified 2+2 report: button's choice of 4, 5 or 6. Neither source gives a rule for how the count is chosen (button? floor? posted?).
- **Is it a real fixed game?** Found only in WSOP's live-action rule sheet and a 2012 side-game thread. The WSOP 2026 *tournament* rules, Golden Nugget's 2025 tournament rules, Commerce Casino's and Bicycle's Bureau-approved rules and Robert's Rules (local text search) do not mention Big Easy (the first four do list a Big O game; Robert's lists only four-card Omaha Hi-Lo); the Venetian page and PokerStars pages I opened don't mention it either. Searches for "Big Easy poker" mostly return an unrelated casino. Treat as a WSOP/dealer's-choice curiosity.

## Common newcomer mistakes
- Assuming the Omaha "two from hand, three from board" rule relaxes with more cards - it does not (WSOP: all Omaha Hi-Lo rules apply).
- Confusing it with 6-card Omaha *high* - Big Easy is split (8-or-better low).
- Forgetting that every player must have the same number of cards; the dealer fixes it before the deal.
- Over-playing "pretty" hands: with 6+ cards everyone has a draw and nut low/high is common.

## Lore & reputation
- The 2+2 thread title is simply "Big Easy Poker" (June 2012; per the snippet it was "playing at the Rio right now according to Bravo", a table-tracking source). A related 2012 thread snippet says Big O was "already the standard pot limit /8 game getting played at the Rio in mid-limit" (both only via search snippet). The name's origin is not documented in any source I could open.

## Related games
- big-o
- omaha-hi-lo
- omaha-hi-lo-regular
- courchevel-hi-lo

## Sources
- https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf (text at /tmp/wsop.txt) - the only primary rule text: Big Easy
- https://forumserver.twoplustwo.com/21/other-poker-games/big-easy-poker-1212368/ - 2012 thread (HTTP 403; snippet only via web_search)
- https://forumserver.twoplustwo.com/27/casino-amp-cardroom-poker/wsop-side-game-action-torse-1212402/ - 2012 WSOP side-game thread (HTTP 403; snippet only)
- https://www.pokernews.com/poker-rules/big-o.htm - Big O background (parent game)
- https://www.pokerstars.com/poker/games/omaha/5-card-high-low/ - 5-card O8 rules baseline
- https://en.wikipedia.org/wiki/Omaha_hold_%27em (raw) - five- and six-card Omaha context

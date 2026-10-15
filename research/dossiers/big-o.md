---
slug: big-o
name: Big O
abbrevs: [Big O, 5-card O8, PLO8-5, 5-card PLO8]
nicknames: ["Five-Card Omaha Hi-Lo", "Five-Card Omaha Eight or Better", "5 Card Pot-Limit Omaha Hi-Lo 8 or Better", "Big-O", "5-O (hi-lo)"]
family: board        # board | draw | stud | hybrid
wins: [high, low-8-or-better]
usualStructure: [pot-limit, limit]
holeCards: 5
draws: 0
players: "2-8"
parent: omaha-hi-lo
canonicalSource: "WSOP 2026 Live-Action Rules, Section VIII (Omaha High-Low variation - 5 card - 'The Big O', 8 participant maximum)"
---
## Deal & structure
- Omaha Hi-Lo (O8) with one change: **five** hole cards each instead of four. WSOP's rule text for Big O is literally "all the rules of Omaha High-Low apply ... all participants are dealt 5 cards in their initial starting hand" and caps the game at **8 players**.
- Everything else is standard Omaha: button + blinds (WSOP allows one blind, several blinds, antes, or a mix), a betting round on the deal, then burn + three-card flop, burn + turn, burn + river, with a betting round after each; five shared board cards.
- WSOP's pot-limit section even gives a worked example for a "3 Blind PLO/Big O" game ($1-$2-$5): the blinds are rounded up for computing the first raise, i.e. the pot is counted as $10 not $8 for the opening raise.
- **Betting structure:** The name Big O is normally tied to *pot-limit* ("5 Card Pot-Limit Omaha Hi-Lo 8 or Better" is the long name per PokerNews; Card Player also calls it a 5-card Pot Limit Omaha Hi-Lo game). It is also spread **fixed-limit**: Commerce Casino's Bureau-of-Gambling-Control-approved rules for "Omaha 5 Card High-Low Split (Big O)" use posted table limits with a three-raise cap per round (unlimited raises heads-up), and PokerStars offers limit, pot-limit and no-limit 5-card O8. In a mixed rotation the Big O step is typically played pot-limit (WSOP "Mixed: PLO8 / O8 / Big O" events alternate limit and pot-limit levels).
- Why 8-max (derived, not stated by sources) [INFERENCE]: 8 players x 5 cards = 40 hole cards + 3 burns + 5 board = 48 of 52. Nine players would need 45 + 8 = 53 cards if all burns are used, so 8 is the practical ceiling.

## Showdown / what wins
- Pot is split: **half to the best high hand, half to the best qualifying low**. Every player makes hands from **exactly two of their five hole cards plus exactly three of the five board cards**. You may use a *different* pair of hole cards for high than for low (PokerStars states this explicitly); the same cards can also serve both.
- **Low qualifier = 8 or better:** five cards of different ranks, all 8 or lower. Aces play low. Straights and flushes do **not** hurt a low, so the best low is the wheel A-2-3-4-5, which can also be a straight (a 'scoop' hand). Lows are compared from the highest card down (7-5-4-3-2 beats 7-6-3-2-A, and 6-4-3-2-A beats 6-5-4-3-2). WSOP: "an ace can be played as either high or low".
- No qualifying low at showdown -> the best high hand wins the **whole** pot (WSOP rule b/c).
- Ties: split that half. If one player has the best high and two players tie for the best low, high gets 1/2 and each low gets 1/4 ("quartered").
- **Odd chip** (WSOP general rule, applies to all hi-lo games): in a hi-lo split the high hand receives the odd chip; between tied high hands it goes as in a high game, between tied lows as in a low game. WSOP mixed-game procedure for button games simplifies this to "worst position" gets the odd chip. (Note the conflict inside the WSOP document; see Rooms disagree.)
- With five hole cards you have **10** two-card combinations versus 6 in four-card Omaha (PokerNews), so nut hands, redraws and A-2 type holdings are much more common.

## Rooms disagree
- **Odd-chip rule:** WSOP says generally the high half gets the odd chip in hi-lo split games, but for "all button games" in WSOP's mixed-game procedure the odd chip goes to the worst position (first left of the button). Commerce Casino's Big O rules give the odd chip from the high/low split to the high hand; within a tied half, to the tied player closest to the left of the button. Mixed Game Masters notes some rooms give it to the first player clockwise from the button instead of the high hand. Ask the floor.
- **Max players:** WSOP live-action rules say 8 participants. Commerce also caps Big O at eight active players dealt in even though the table seats nine (the player left of the big blind sits out if nine are seated). The 2026 WSOP Official Tournament Rules (and Golden Nugget's 2025 Grand Poker Series rules, which use the same wording) play "Omaha 'Big O' Hi/Low 8 or Better" with **7 per table** "so Final Table can be seated with 8". PokerStars/online explainers don't restrict to 8 in text.
- **Structure:** Pot-limit is the norm in explainers and WSOP events; Commerce's room rules are written around posted table limits and capped raises (fixed-limit style). A PokerAtlas listing of "8/16 Limit Big O Hi/Lo" at Commerce showed up in a web-search snippet (page itself returned HTTP 403) and fits that.
- **Commerce's rules typo:** the Commerce Big O object-of-the-game paragraph says "two out of the four cards initially dealt" (copy-paste from its 4-card game); the same document's winner section correctly says two of the five hole cards.
- **Name collision (important):** at the Bicycle Hotel and Casino the Bureau-approved game called simply "Big O" (BGC ID GEGR-001746, June 2016) is five-card Omaha **high only** (single pot to the best high hand, 8 seats, three-raise cap, odd chip to the player closest to the left of the button); Commerce uses "Omaha 5 Card Poker" for high and "Omaha 5 Card High-Low Split (Big O)" for the split game. Wikipedia likewise uses "Big O" for five-card Omaha high. WSOP, Golden Nugget, PokerNews, Card Player and WSOP event titles use it for the hi-lo game. Always confirm "8 or better" when someone says "Big O" (a PokerChipForum poster put it as "the game is called Big O and it is 8 or better; no qualifier would be '5 Card PLO Hi/Lo no qualifier'").
- **Qualifier:** within the hi-lo Big O, 8-or-better is the standard; WSOP separately defines a no-qualifier version ("Omaha High Low Regular", see omaha-hi-lo-regular) and a 9-or-better 2-7-low game (Sick-O).

## Common newcomer mistakes
- Using three or more hole cards (or the board alone) - must be **exactly two** from hand and **three** from the board, for each of high and low.
- Thinking a low needs the same two hole cards as the high - it doesn't.
- Chasing a low when fewer than three different cards 8-or-lower can appear on the board; with fewer than three such board cards no low is possible, and the whole pot goes to high.
- Believing straights/flushes disqualify a low (they don't) or that pairs are fine in a low (they aren't - five different ranks).
- Overrating two pair / sets: with ten combos per hand and more nut-capable holdings, PokerNews notes that two pair and trips will hardly ever win at showdown; straights, flushes and better win more often.
- Playing second/third-nut lows into the nut low - extra hole cards mean more people have A-2/A-3 and you get quartered or lose.
- Playing hands with only high cards (e.g. K-Q-J-10-9) in a game where the low half is contested.

## Lore & reputation
- Wikipedia's Omaha page says "Big O" (five-card Omaha) began appearing in Southern California card rooms in 2008 and spread through the area that year - but that sentence carries a {{citation needed}} tag, so treat as unconfirmed. The same page (mixing the high-only and hi-lo versions) calls five-card Omaha popular as a home game in the southeastern US.
- WSOP history (PokerNews): Big O first appeared in the WSOP Dealer's Choice event in 2015; a 2016 event mixed PLO8, O8 and Big O (Wikipedia lists "$1,500 Mixed Pot Limit Omaha 8 or Better & Big O"; similar mixed events appear in 2018, 2019 and 2026). Wikipedia's 2023 WSOP page says Badugi and Big O events were held "for the first time" that year. Standalone **$1,500 Big O** and **$10,000 Big O Championship** bracelet events are listed in 2024, 2025 and 2026 on Wikipedia.
- Name origin (PokerNews): either shorthand for the long "5 Card Pot-Limit Omaha Hi-Lo 8 or Better", or simply "bigger" because of the extra card.
- Card Player's explainer also notes the game's high variance and multiway pots.

## Related games
- omaha-hi-lo (parent, 4 hole cards)
- big-easy (WSOP: 5-plus cards, same rules)
- omaha-hi-lo-regular (no qualifier)
- courchevel-hi-lo (5 cards + exposed first flop card)
- ultimate-big-o (two boards, best/best)
- 3-2-1 (three flops, two turns, one river, O8)

## Sources
- https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf (text at /tmp/wsop.txt) - WSOP 2026 rules: Omaha 8/O, Big O, odd chip
- Commerce Casino BGC-approved game rules compilation (local text /tmp/commerce.txt, section "Omaha 5 Card High-Low Split (Big O)", BGC ID GEGR-002085, June 2026) - room rules: 8 max active, limit style, odd chip, 8-or-better
- Bicycle Hotel and Casino BGC-approved rules (local text /tmp/bike.txt, section "Big O", GEGR-001746, June 2016) - their "Big O" is five-card high only
- Golden Nugget Las Vegas 2025 Grand Poker Series Official Tournament Rules (local text /tmp/gn.txt, section "Omaha 'Big O' Hi/Low 8 or Better (5 Card Omaha)") - 7 per table, 8 at final table
- 2026 WSOP Official Tournament Rules (local text /tmp/w26.txt, "Omaha 'Big O' Hi/Low 8 or Better (5 Card Omaha)") - 7 per table in tournaments
- https://www.pokerstars.com/poker/games/omaha/5-card-high-low/ - 5-card O8 rules, low ranking, formats
- https://www.cardplayer.com/rules-of-poker/glossary/big-o-poker - Card Player Big O definition/aliases
- https://www.pokernews.com/poker-rules/big-o.htm - Naming, 10 combos, WSOP history
- https://en.wikipedia.org/wiki/Omaha_hold_%27em (raw wikitext) - Big O origin claim, five-card variants
- https://en.wikipedia.org/wiki/2023_World_Series_of_Poker, .../2024_..., .../2025_..., .../2026_World_Series_of_Poker - Big O bracelet events
- https://www.pokernews.com/tours/wsop/2026-wsop/event-14-mixed-pot-limit-omaha-hi-lo/ - 2026 mixed PLO8/O8/Big O event
- https://mixedgamemasters.com/strategy/pot-limit-omaha-hi-lo/rules/ - PLO8 rules, odd-chip variation
- https://www.pokerchipforum.com/threads/big-o-but-no-qualifier-discuss.117620/ - naming: Big O implies 8-or-better

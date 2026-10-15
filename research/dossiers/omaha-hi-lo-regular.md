---
slug: omaha-hi-lo-regular
name: Omaha Hi-Lo Regular
abbrevs: [O8 Regular, Omaha High-Low Regular, O/Regular]
nicknames: ["Omaha hi-lo no qualifier", "Omaha hi-lo without an 8 qualifier", "Omaha Eight-or-No"]
family: board        # board | draw | stud | hybrid
wins: [high, low-a5]   # low = best ace-to-five low with NO qualifier (see below)
usualStructure: [limit, pot-limit]
holeCards: 4
draws: 0
players: "2-10"
parent: omaha-hi-lo
canonicalSource: "WSOP 2026 Live-Action Rules, Section VIII ('Omaha High Low Regular')"
---
## Deal & structure
- Identical to Omaha Hi-Lo (O8): four hole cards, blinds/antes, flop, turn, river, four betting rounds, exactly two hole + three board cards. WSOP's whole rule: "All the rules of Omaha High Low 8/O apply, except that there is no qualifier for low."
- Played in limit, pot-limit or no-limit exactly like regular Omaha Hi-Lo (WSOP: O8 may be limit, no-limit or pot-limit).
- Player count: no special cap in the WSOP text; ordinary Omaha dealing limits apply (4 cards x 10 players + burns still fits in 52) [INFERENCE].

## Showdown / what wins
- Half of the pot goes to the best high hand, half to the **best low hand - whether or not it is 8-or-better**. The "if no low qualifies, high scoops" clause of O8 is gone, so there is (almost) always a low winner and the pot is split every hand, with a scoop only when one player owns both the best high and best low.
- Low is the usual Omaha-Hi-Lo ace-to-five low: aces low, straights and flushes don't count against you, best possible hand is the wheel A-2-3-4-5; hands are compared highest card first.
- Because every player must use exactly two hole cards and three board cards, every showdown hand has *some* low rating, including hands with a nine, ten or face card, or even a pair. How pairs/trips rank among non-qualifying lows is **not spelled out** in the WSOP Omaha text. By analogy to WSOP's Razz text ("two aces are the lowest pair"; straights and flushes ignored) and standard ace-to-five (California) lowball, the likely reading is: any five-different-ranks hand beats any hand with a pair, then compare the highest card down; a pair-containing low ranks by A-to-5 lowball order [INFERENCE - confirm with the floor].
- Ties: split that half of the pot among the tied players; one high winner + two tied lows = 1/2 and 1/4 + 1/4.
- **Odd chip:** WSOP's general hi-lo rule gives the odd chip to the high hand; under WSOP's mixed-game procedure for button games it goes to the worst position (first left of the button). Same as O8.

## Rooms disagree
- Only the WSOP sheet defines this by name. No other room sheet I opened (Venetian Omaha rules page; PokerStars; PokerNews) mentions a no-qualifier Omaha. The wider vocabulary is consistent: WSOP also lists "Seven Card Stud High Low Regular" (stud, no qualifier, bring-in to the high card) alongside "Stud/8".
- WSOP's 2026 *tournament* rules and Golden Nugget's 2025 tournament rules (local text search) list "Seven Card Stud Hi/Low Regular" but no Omaha Hi-Lo Regular, so this game exists only in the live-action cash/dealer's-choice rule sheet among the room documents I checked.
- Naming: "Regular" is WSOP's label (and the forum thread above calls the same thing "no qualifier"). If someone at a table asks for "Omaha 8 with no qualifier", confirm they mean this game and not a 9-or-better qualifier.
- A 9-or-better qualifier is sometimes used in place of 8 in a few casinos (Wikipedia calls it rare); that is a different house rule, not this game.

## Common newcomer mistakes
- Folding a "no low" board: here someone always owns the low half. Even 9-high or worse lows win half the pot.
- Forgetting the exactly-two rule: you must still use two hole cards and three board cards, so you may be unable to dodge a paired board low.
- Assuming "no qualifier" means high scoops can't happen: a player holding the nuts both ways still scoops.
- Paying off with a mediocre high because you "can't lose the low": half the pot is gone before you start to win.

## Lore & reputation
- Rare in practice. A March 2024 PokerChipForum thread titled "Big O but NO Qualifier" has its author write that he "never see[s] anyone play" a Big O variant without the 8 qualifier; replies argue the qualifier is part of the game's appeal (no low about 60 percent of the time according to one poster, an unverified claim) and that the game would properly be called "5 Card PLO Hi/Lo no qualifier". That is forum chatter, not a rule source.
- Treat as a Dealer's Choice / WSOP-mixed-game option rather than a rotation staple. WSOP's own sheet lists it directly under Omaha 8/O, ahead of Big O.

## Related games
- omaha-hi-lo (qualifier version; parent)
- big-o, big-easy (five-card versions - qualifier applies there too)
- sick-o (different low: 2-7 with nine qualifier; WSOP)

## Sources
- https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf (text at /tmp/wsop.txt) - Omaha High Low Regular; stud-regular analogue; Razz ranking; odd chip
- https://www.pokerstars.com/poker/games/omaha/5-card-high-low/ - ace-to-five low ranking (qualified game)
- https://www.venetianlasvegas.com/resort/casino/poker/omaha-basic-rules.html - room rules: qualifier "usually" used
- https://en.wikipedia.org/wiki/Omaha_hold_%27em (raw) - 9-low qualifier rare
- https://www.pokerchipforum.com/threads/big-o-but-no-qualifier-discuss.117620/ - forum on no-qualifier Big O rarity
- https://en.wikipedia.org/wiki/High-low_split (raw) - qualifiers in hi-lo games

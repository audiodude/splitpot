---
slug: omaha-hi-lo
name: Omaha Hi-Lo
abbrevs: [O8, Omaha/8, PLO8 (pot-limit form), Omaha 8-or-better]
nicknames: ["Omaha eight-or-better", "Omaha high-low split", "the O in H.O.R.S.E.", "Omaha 8s or better"]
family: board
wins: [high, low-8-or-better]
usualStructure: [limit]
holeCards: 4
draws: 0
players: "2-10"
parent: null
canonicalSource: "WSOP 2025 Tournament Rules (Omaha Hi/Low 8 or Better) + WSOP 2026 Live-Action Rules (Omaha High-Low 8/O) + Robert's Rules of Poker v11 Section 7"
---
## Deal & structure
- Button game with a small blind and a big blind (antes optional; WSOP allows one blind, several, antes, or blinds+antes). Each player gets **four** hole cards face down. Rounds: pre-flop, flop (3 cards, burn first), turn (burn, 1 card), river (burn, 1 card) - four betting rounds, no draw.
- Pre-flop betting starts left of the big blind; every later round starts with the first live player left of the button.
- **Limit is how O8 is typically spread in live mixed games** (it is the "O" game in H.O.R.S.E. and the 8-game mix; Wikipedia: "usually played in the fixed limit version"; PokerNews: "usually played with fixed-limit betting and often turns up in mixed game formats"; PokerCoaching: limit O8 "is the traditional format and is frequently spread in live casino mixed games"). Pot-limit (PLO8) is the dominant form online and in high-stakes cash games; no-limit is rare. WSOP lists Omaha 8 as limit, pot-limit or no-limit.
- Limit bet sizes: small bet pre-flop and on the flop, big bet (double) on the turn and river - the usual limit flop-game convention [found in a search-result snippet of Upswing's rules page; the page itself returned HTTP 429 when opened, so verify against a room's own rules]. Raise cap: a bet plus three raises per round when three or more players are in (Robert's Rules #4(a); PokerCoaching: "raise this bet up to three times"); Robert's allows unlimited raising heads-up except in tournaments.
- Kill pots are common in cash games (Robert's Section 13 / WSOP Live-Action "Kill Pots": in high-low split games a player who scoops a pot of at least five times the upper limit kills the next pot).

## Showdown / what wins
- **Hand construction (both halves): exactly two of your four hole cards plus exactly three of the five board cards.** You may use a *different* pair of hole cards for your high hand and your low hand. Playing the board, or using one, three or four hole cards, is not allowed. (WSOP, Robert's, PokerNews.) Robert's Rules also says the entire four-card hand should be shown to receive the pot.
- **Pot is split in two equal halves:** the best high hand and the best qualifying low hand. Same player can win both ("scoop"). If nobody qualifies for low, the best high hand wins the **whole** pot (WSOP 8/O (c), Robert's #2, Wikipedia).
- **High half:** ordinary high poker rankings (ace high; A-2-3-4-5 is the lowest straight).
- **Low half (8-or-better qualifier):** five cards of five *different ranks*, all eight or lower. The ace plays **low** for the low hand (and may still be high for the high hand). Straights and flushes do **not** count against a low hand (WSOP: "the best possible low hand is 5-4-3-2-A, also known as a wheel"; Robert's #3). Pairs disqualify those five cards, so any pair or a card nine or higher cannot be part of the low.
- **Comparing lows:** read the five cards from the highest rank down; the lower hand wins at the first difference (Steve Badger's trick: read 7-5-3-2-A as 75,321 and take the smaller number). Best = A-2-3-4-5; worst qualifier = 8-7-6-5-4.
- **Board needs three distinct low cards:** because exactly three board cards go into the low, a low is only possible if the five-card board has at least three different ranks of eight-or-lower. If the board shows fewer than three, nobody has a low even if they hold A-2-3-4 (PokerCoaching; Wikipedia).
- **Ties:** tied low (or tied high) splits that half; being tied for low and nothing else is "quartered". The one-way player who also ties gets 75% (e.g., wins high outright and ties low with one opponent). Identical winners for both halves ("two wheels in Omaha/8") split the pot as evenly as possible (WSOP 2025 rule 73).
- **Odd chip:** WSOP 2025: in H/L split games the odd chip in the total pot goes to the high side. WSOP Live-Action and Robert's: the high hand gets the odd chip in a split between the high and low; the odd chip between tied lows goes by low rules. WSOP Live-Action's mixed-game simplification says button games give the odd chip to the "worst position" (see Rooms disagree).

### Tricky showdowns (exact cards: s h d c)
**1. Counterfeited low.** Board: Ad 4s 6c 7h Ks. Hero: Ah 2c Qd Jd. Villain: 2d 3s 9c 9h.
- Hero's "nut" A-2 low is counterfeited by the board ace: the ace in Hero's hand and the board ace are the same rank, so only one can be used. Hero's best is hole A+2 with board 4-6-7 = 7-6-4-2-A.
- Villain uses hole 2+3 with board A-4-6 = 6-4-3-2-A. 6-high beats 7-high, so Villain wins the low half even though Hero held A-2 (this exact situation: "23 beats A2 on a 7-6-4-K-A board" in Steve Badger's explanation).
- High: Hero Ah Qd + board Ad Ks 7h = pair of aces (A-A-K-Q-7) beats Villain's pair of nines. Hero wins high, Villain wins low; the pot is split 50/50.

**2. No qualifying low - the high hand takes everything.** Board: Kd Qc 9s 6h 2d. Hero: As 3c 4d 5d. Villain: Js Th 4c 4h.
- The board contains only two cards of eight-or-lower (6 and 2), so a low needs three board cards and is impossible. Hero's A-3-4-5 is useless for low.
- High: Villain uses Js Th with Kd Qc 9s = K-Q-J-T-9, a king-high straight. Hero has only ace-high. Villain scoops the whole pot, not half.

**3. Quartered (and 3/4 for one side).** Board: 3h 5s 7d Kc Qd. P1: As 2d 9c 9h. P2: Ad 2c Jc Ts. P3: Ks Kd 8d 8c.
- Low: P1 uses A-2 with 3-5-7 = 7-5-3-2-A; P2 makes the identical 7-5-3-2-A; they tie for the best low. P3 has no usable low (8-8 is a pair; only one hole 8 can be used and then needs another low hole card).
- High: P3 has trip kings (Ks Kd + Kc board + Qd 7d); P1 has only a pair of nines; P2 ace-high. P3 wins the high half.
- Payout: P3 gets 50% (high), P1 and P2 each 25% (half of the low half). If P2 had folded, P1 would have won 50% - the reason non-nut/duplicated lows are dangerous in multi-way pots.

**4. A straight on the board is not "free"; the nut low and best high go to different players.** Board: Ad 2c 3h 4s 5d (a wheel on the board). Hero X: 6c 7s Kd Kc. Hero Y: Ac 2s 9d 9c.
- Nobody can play the board - exactly two hole cards must be used. Y plays hole Ac 2s with board 3h 4s 5d for A-2-3-4-5, a wheel (nut low, and a 5-high straight). X plays hole 6c 7s with 3h 4s 5d for a 7-high straight, which beats Y's wheel-straight for high.
- Low: Y's wheel beats X's best low (7-6-3-2-A). Result: X wins high, Y wins low, each half the pot. A player with no low hole cards (e.g., K-Q-J-T) would have no low at all on this board, even though the wheel sits there.

**5. Different hole-card pairs for high and low.** Board: Ah Kd 7s 6c 2d. Hero: Ac Kc 5d 4h.
- High: Hero uses hole Ac Kc with board Ah Kd 7s = A-A-K-K-7 (two pair).
- Low: Hero uses a *different* pair, hole 5d 4h, with board Ah 6c 2d = 6-5-4-2-A (better than the 7-6-4-2-A available from Ac 4h with 7s 6c 2d). One hand, two different two-card combinations, both halves in play; Hero scoops unless someone beats either half.

## Rooms disagree
- **Qualifier:** 8-or-better is the standard (WSOP, Robert's, Wikipedia, PokerNews). Wikipedia says "a few casinos" use a 9 qualifier, rare. WSOP Live-Action lists "Omaha High Low Regular" (no qualifier at all - the low half always exists) and "Sick-o" (9 qualifier, low played as a 2-7 hand: aces high, straights/flushes count against) as distinct games. Those are separate games/variant notes, not O8.
- **Odd chip:** WSOP 2025 Tournament Rules (#73) and WSOP Live-Action (#153), Robert's (#5c): the high side gets the odd chip when splitting between high and low. But WSOP Live-Action's mixed-games procedure says "all button games, odd chip will go to the worst position", and one commentary site (Mixed Game Masters) says some rooms give it to the first player clockwise from the button. Default to the room's posted rule.
- **Raises:** bet + three raises (4 bets) multiway; unlimited heads-up in cash games, capped in tournaments (Robert's #5, which says tournament limit events cap raises even heads-up until two players remain).
- **Max players:** Wikipedia says up to eleven can be dealt in (it is most commonly played six- or nine-handed); the WSOP Live-Action rulebook gives Big O and Big Easy an 8-player maximum but gives plain Omaha 8/O no stated maximum in the text I read. The "2-10" in the front matter is a practical figure, not a rule quote [INFERENCE].
- **Blinds structure:** WSOP allows blinds, ante, or both; some rooms use a kill (the Live-Action rulebook includes full kill-pot rules for high-low split games).
- **Pot-limit vs limit as the "default":** online and in Europe "Omaha" usually means PLO (high-only) or PLO8; US live mixed games spread limit O8 (PokerNews, Wikipedia, PokerCoaching).
- Note: Mixed Game Masters' claim that no low qualifies "roughly 40% of the time" is not backed by a calculation on the page; do not repeat it.

## Common newcomer mistakes
- Using only one hole card or three hole cards, or trying to play the board (a board wheel does not give you a low).
- Assuming A-2 is always the nut low - it is counterfeited as soon as the board pairs your ace or deuce (see scenario 1). A-2-3-x holdings give backup.
- Thinking a pair or a nine-high hand can make a low; needs five different ranks, all 8 or lower.
- Thinking flushes and straights hurt your low (they don't), or that a straight/flush ruins your hand for high.
- Not realizing the low needs three distinct low cards on the board; chasing a low on K-Q-9-x-x is a runner-runner dream.
- Fearing quartering too much: in loose limit games it is almost never a big loss, while getting 3/4 of the pot is a real goal (Steve Badger, opinion).
- Playing one-way hands without an ace; every source from PokerNews to PokerCoaching tells newcomers to "never leave home without an ace" (A-2 and A-3 hands especially).
- Forgetting to show all four cards; Robert's Rules says the whole four-card hand should be shown to claim the pot.
- Overvaluing second-nut and third-nut lows in multi-way pots (PokerCoaching: a weak low like 8-7 is often drawing dead to A-2).

## Lore & reputation
- Omaha first reached a casino via casino executive Robert Turner, who introduced it to Bill Boyd at the Las Vegas Golden Nugget, where it was offered as "Nugget Hold'em" (Wikipedia). The original Omaha used two hole cards (per Wikipedia); the exact origin of the game is unknown.
- Omaha/8 is the "O" of H.O.R.S.E. (Wikipedia, PokerNews) and a fixture of the 8-game mix. PokerNews ran limit Omaha Hi-Low in its WSOP Dealer's Choice guide and called the limit game the "least popular" Omaha variant among its crowd of mixed-game players.
- PLO8 is the form sold in online card rooms and carries a $10,000 PLO Hi-Lo Championship at the WSOP (PokerNews photo caption: Sean Troha won the 2024 title).
- Steve Badger (author, opinion) says low-limit O8 is "among the easiest poker games to beat if you play properly" and notes Omaha is often played with a kill to generate action - flagged as opinion.
- Name "Omaha" derives from the "must use two cards" rule (Wikipedia) - the exact city/legend is not documented.

## Related games
omaha-hi-lo-regular, big-o, sick-o, pot-limit-omaha, 5-card-plo, courchevel, courchevel-hi-lo, ultimate-big-o, seven-card-stud-hi-lo, drawmaha

## Sources
- /tmp/wsop.txt (WSOP 2026 Live-Action Rules PDF, https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf) - Section VIII Omaha, 8/O, Sick-o, kill pots, odd chip
- https://wsop.gg-global-cdn.com/wsop/pdfs/2025-WSOP-Tournament-Rules.pdf - Omaha Hi/Low 8 or Better, rule 73 odd chip
- https://www.pagat.com/docs/RobsPkrRules11.pdf - Robert's Section 7 Omaha High-Low, raise caps, odd chip
- https://www.pokernews.com/poker-rules/omaha-hi-lo.htm - rules, "O" in HORSE, limit usual
- https://en.wikipedia.org/wiki/Omaha_hold_%27em - 9-low rare, history, examples
- https://pokercoaching.com/blog/how-to-play-poker/omaha-hi-lo-rules/ - three low board cards, limit raises
- https://www.stevebadger.com/poker/omaha/strategy/ - reading lows, quartering, counterfeit example
- https://mixedgamemasters.com/strategy/pot-limit-omaha-hi-lo/rules/ - counterfeit, odd chip variance
- https://cardplayerlifestyle.com/poker-tips-strategy/mixed-game-poker-rules/ - O8 in mixed game festival rules
- https://www.pokernews.com/news/2014/06/your-guide-to-wsop-dealer-s-choice-event-18575.htm - limit/PL Omaha Hi-Lo at WSOP Dealer's Choice

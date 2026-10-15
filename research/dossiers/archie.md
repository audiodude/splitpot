---
slug: archie
name: Archie
abbrevs: ["Archie triple draw hi-lo", "9s-and-8s (informal)"]
nicknames: ["Triple Draw High-Low Split with qualifiers", "Archie (99 Archie when high qualifier is a pair of nines)"]
family: draw
wins: [high, low-a5]
usualStructure: [limit]
holeCards: 5
draws: 3
players: "2-6 normal; 7 possible with reshuffles"
parent: null
canonicalSource: "WSOP 2026 Live-Action Rules, Section X Archie (rules 293-296); cross-checked with Pagat, BARGE, CountingOuts, Card Player"
---
## Deal & structure
- **What it actually is:** a five-card *triple-draw* high-low split game. The high half uses ordinary poker rankings; the low half uses ace-to-five rankings. Each half has a **qualifier**. It is not stud and not Omaha. The name comes from a Phoenix mixed-game player who reportedly lost a lot when the game was new (CountingOuts, Card Player/Haney); Pagat says it was invented "some time in the 2010s by a mixed game group in Phoenix, Arizona" and named after one of the players.
- Button and blinds (WSOP: "normally played with one or more blinds, sometimes with an ante added"; Pagat: no ante, small blind + big blind; BARGE: button and blinds). Fixed limit is the norm: WSOP "played generally as a limit poker structure"; Pagat: bet size doubles after the second draw.
- Each player gets five cards face down. Betting round before the first draw. The WSOP Archie text reuses the lowball intro here: players must open with a bet or fold; "some betting structures allow the big blind to be called; other structures require the minimum open to be double the big blind" (so house structure varies). Then three draws, each followed by a betting round: four betting rounds, three draws.
- Each draw: first live player left of the button goes first; a player may discard 0 to 5 and receive replacements (Pagat: "0 to 5"; BARGE same). Post-draw betting starts with the first active player left of the button (Pagat).
- Limit sizing: BARGE: small bet pre-draw and after draw 1, big bet after draws 2 and 3. Pagat/WSOP: doubles after the second draw.
- Deck running short: WSOP says shuffle prior discards, mucks and burns (not the cards from the draw round in progress); use the stub's last card only if it completes all draws for the hand. CountingOuts/Badger: games are normally capped at six players for this reason; Badger says seven is possible with occasional reshuffling.

## Showdown / what wins
Two halves, each with its own qualifier. Cards speak (no declaring). One player can win both halves.
- **High half (standard poker ranking, all five cards):** the best five-card high hand wins half, but only a hand of **a pair of nines or better** qualifies (WSOP #293, Pagat, CountingOuts). "Nines or better" means any pair 9-9 up through A-A, and everything above a pair (two pair, trips, straight, flush, full house...).
- **Low half (ace-to-five, all five cards):** aces low, straights and flushes ignored, pairs bad. The best low wins half, but it must be **eight-high or better** (e.g. 8-7-6-5-4 is the worst qualifying low) (WSOP "8/O", Pagat, CountingOuts, Card Player).
- The same five cards are read both ways. A wheel A-2-3-4-5 is the nut low *and* a five-high straight that qualifies for high, so it competes for both halves.
- If no hand qualifies for high, the best qualifying low wins the entire pot (WSOP #293). If no hand qualifies for low, the best qualifying high wins the entire pot (WSOP #294).
- **If nobody qualifies either way:** WSOP #295 - the pot is split by all participants remaining in the hand. (Other rooms differ - see below.)
- Examples (suits omitted when irrelevant):
  1. Player A shows 8-5-3-2-A (qualifies low, no pair so not a high qualifier). Player B shows K-K-7-4-2 (qualifies high, has a pair so no low). A wins low half, B wins high half.
  2. Player C shows 6-5-4-3-2 (a six-high straight; low = 6-5-4-3-2 qualifies). Player D shows 9-9-J-3-2 (pair of nines, qualifies for high only). C beats D for low (D's pair isn't a low), and C's straight beats D's pair for high; C scoops.
  3. One player has A-K-J-8-5 (ace-high; not a qualifier either way) and another has Q-9-7-4-3 (queen-high, no low): nobody qualifies. Under WSOP #295 they split the pot; under BARGE's version the ace-high wins all.
- Odd chips: WSOP #153 gives the odd chip in a split between high and low halves to the **high** hand; WSOP's "Mixed Games" simplification says all button games give it to the worst position. These conflict; the Archie section does not say which applies. [INFERENCE: ask the floor]

## Rooms disagree
- **High qualifier:** pair of nines (WSOP, Pagat, CountingOuts, Card Player/Haney "typical", Card Player Lifestyle) vs pair of **sixes** (BARGE rulebook default, Steve Badger's strategy page default; Haney: "in some games"; Pagat: "in some home games"; Card Player Lifestyle: "rules vary from room to room"). Badger: pair of nines "is a less common variant"; CountingOuts says some rooms use sixes; the 8-or-better low "has always been the requirement".
- **Nobody qualifies:** WSOP #295 and Pagat: split among everyone left. CountingOuts: "most rules" split among all players at showdown, "sometimes the best non-qualifying hand wins it all". BARGE and Badger: the best high hand scoops (even if weaker than a pair of 6s). Haney/Pagat: some play that the pot carries over to the next hand. Check house rules.
- **Odd chip** (see above): high gets it vs worst position (both from WSOP).
- **Max players:** WSOP gives no max in the Archie section; CountingOuts "typically capped at six", Badger "six-handed most common".
- **Blinds vs ante:** WSOP allows either; Pagat says no ante.
- **Variants spread alongside it:** Ari (adds a high-only community card; qualifier 6s per WSOP), Archie 49/0 (point-based, face cards zero; see `archie-49-0`), "777" (Haney: split three ways between best high, best low and best badugi with trip-7s / seven-low / seven-badugi qualifiers; he rates it 4/10, no room evidence found) and a version with a community card he mentions as an alternative.

## Common newcomer mistakes
- Treating it like O8 or stud eight-or-better. You can't free-roll a made low for the high side, and drawing one to a hand like 2-4-6-7 gives you almost no high potential (CountingOuts).
- Playing mediocre low draws like 2-3-6 or 7-6-4-2 multiway. Haney and CountingOuts both stress that low-oriented hands are overrated here; qualifying is easier on the high side (about 27% of deals contain a pair of nines or better, versus ~2% for an eight-low).
- Breaking a pat qualifying hand on the first draw to chase a smoother one: Haney says breaking an eight to draw to a wheel is often right early, but keeping a qualifier matters later.
- Forgetting there is no "nuts" - you can start drawing to A♥K♥8♥3♥ and end with KKKK or 8-7-6-3-A (Badger).
- Not checking the room's qualifier (6s vs 9s) and no-qualifier rule before the hand.
- Believing a low straight draw can't win high; a low straight draw is premium here because it qualifies for both halves (Badger).

## Lore & reputation
- Pagat: "increasingly featured in mixed games in Las Vegas". Card Player Lifestyle: "one of the rarest and most complex draw games... grown in popularity on the Las Vegas mixed game scene."
- Name story (CountingOuts, Haney): a Phoenix player named Archie took a big loss when the game was new, so the game was named for him. Pagat's source (Nick Fox) says named after one of the players.
- Haney rates it 8/10 and "polarizing": pots get huge, brutal coolers; many say they dislike it but few fold out of the rotation. Badger calls it possibly "the most complex variant played in casinos" at time of writing and "a rather terrible [game] for inattentive... players."
- Appears in the Coach's Game (Resorts World $8-16 mix, 17 games) per Card Player (2023). WSOP Live-Action cash rules include it. It is NOT on the PokerNews/PokerListings 20-game WSOP Dealer's Choice menu.
- CountingOuts (2017): "Archie is a new game and no books currently have any material on it."

## Related games
ari, archie-49-0, a-5-triple-draw, badacey, five-card-draw, 2-7-triple-draw

## Sources
- /tmp/wsop.txt (https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf) - Archie 293-296, odd chip 153
- https://www.pagat.com/poker/variants/5draw.html - Archie section (Nick Fox), qualifiers, variants
- https://www.barge.org/rulebook/archie.html - 6s default, high scoops if nobody qualifies
- https://www.countingouts.com/archie-rules-and-basic-strategy/ - 9s default, 6s elsewhere, no-qual options
- https://www.countingouts.com/archie-introduction/ - origin story, qualification probabilities
- https://www.stevebadger.com/poker/archie/ - 6s default, six-handed, high scoops
- https://www.cardplayer.com/poker-news/spice-up-your-poker-home-game-archie-variants-haney - qualifiers, 777, carry-over, community card
- https://cardplayerlifestyle.com/poker-tips-strategy/mixed-games-poker-guide-draw-games/ - rooms vary 6s/9s
- https://cardplayerlifestyle.com/poker-tips-strategy/mixed-game-poker-rules/ - Mixed Game Festival rules, Ari, 49/0
- https://www.cardplayer.com/cardplayer-poker-magazines/66506-chad-eveslage-36-2/articles/24732-the-coach-s-game-at-resorts-world-part-1 - Coach's Game 17-game list
- https://www.pokernews.com/strategy/wsop-mixed-games-strategy-dealers-choice-30648.htm - DC list (no Archie)

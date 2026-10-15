---
slug: hi-dugi
name: Hi-dugi
abbrevs: [Hidugi, "High Badugi", "Hi-Badugi"]
nicknames: ["Hi-dugi (Mixed Game Festival spelling)", "Hidugi"]
family: draw
wins: [other]   # best HIGH four-card "dugi" (four different suits, pairs allowed and GOOD)
usualStructure: [limit]
holeCards: 4
draws: 3
players: "not stated (presumably as Badugi)"
parent: badugi
canonicalSource: "Card Player Lifestyle, 'Mixed Game Poker Rules' (Hi-dugi entry) - thin; no WSOP or house rulebook found"
---
## Deal & structure
- Card Player Lifestyle's Mixed Game Festival rule sheet: "a draw poker variant played with four hole cards and using the standard betting rules of games with blinds." That is all it says on structure; I found no explicit number of draws or limit structure for standalone Hi-dugi. [INFERENCE: it is played like Badugi - blinds, four cards, three draws, limit - because it is listed beside Badugi and Badugi Hi-Low in the same "Draw Games" group and described as the high mirror]
- So: four cards face down; betting before the first draw; draws of 0-4 cards; betting after each draw.

## Showdown / what wins
Only the highest "dugi" wins the pot (no split):
- **A "dugi" is a four-card hand with four different suits.** Ranks are allowed to pair - pairs help you. (The rule sheet's very first sentence says "different suits and ranks", but the next sentences rank "4-of-a-kind dugi", "3-of-a-kind dugi", "two pair dugi", "one pair dugi", so ranks may repeat. The Coach's Game write-up of the related Drawmaha High-Dugi confirms: "quads, trips, two pair, and pairs are good".)
- Ranking from the rule sheet: **A-A-A-A is the best hand** (four aces are automatically four suits). Then trips-dugi (e.g. AAA + a king of the fourth suit), then two-pair dugi, one-pair dugi, no-pair dugi, and then non-dugi hands ("3-of-a-kind no dugi, etc."). "A four-card Badugi... always beats any non-Badugi hand."
- Within the same kind (e.g. two one-pair dugis) the natural reading is normal high-poker comparison: higher pair first, then kickers, aces high. [INFERENCE: not spelled out]
- PokerChipForum example: A♣ A♦ A♥ Q♥ loses to 2♣ 5♦ 9♥ K♠, because the first has two hearts (not a dugi) and the second is a rainbow (a dugi). Machine's reply there: "any combo of AAAK" is the second-best hand (three aces plus a king of the missing suit).
- Not specified in anything I could open: how two non-dugi hands compare (suit count? card count like badugi? or plain high-poker rank?), the odd-chip rule, and the number of draws. [UNVERIFIED]

## Rooms disagree
- **Which game is "Hi-dugi"?** (a) Card Player Lifestyle: standalone four-card draw game, best high dugi wins whole pot. (b) A 2+2 forum thread titled "Hi-Dugi" (search snippet only; page returned HTTP 403 when I tried to read it): "Split pot 5 card draw game. The pot is split between the best 4 card badugi and the best 5 card high poker hand." That is a five-card split game - closer to a Badeucy/Drawmaha-style hybrid than to the Card Player Lifestyle description. I could not read the thread to confirm. (c) Most visible use in real rooms is **Drawmaha Hi-dugi** (see `badugi-high-drawmaha`) - the Omaha-board game whose draw half is a hi-dugi taken from your five hole cards; the Coach's Game at Resorts World spreads "Drawmaha High-Dugi" but not standalone Hi-dugi (Haney's 17-game list). WSOP Live-Action rules never name "Hi-dugi" as a standalone game: the Badugi section just says the game "can also be played in a high variation. The best hand being As, Ah, Ad, Ac", and the Drawmaha section lists "Badugi High".
- **Whether ranks may repeat** in a hi-dugi: the Card Player Lifestyle paragraph contradicts itself; the ranking list (quads, trips, two pair, pair) settles it: they may.
- Evidence the standalone version is really spread is thin: the Mixed Game Festival rule sheet is the only source I found listing it as its own draw game.

## Common newcomer mistakes
- Assuming the best hi-dugi is A-K-Q-J rainbow. It isn't: A-A-A-A is the best, then AAA-K, since pairs are good (PokerChipForum thread: "I thought it was AKQJ rainbow, but it lists AAAA as the best one"; Haney: "not an A-K-Q-J badugi as some might expect").
- Forgetting that a rainbow with no pair loses to a rainbow with a pair; count pairs first (rule sheet order).
- Treating a four-suited hand as a "badugi" in the low sense - here suits just have to differ; low cards are bad.
- Thinking this is the same as Badugi High-Low (see `badugi-hi-lo`): different game, different scoring.

## Lore & reputation
- Card Player Lifestyle lists it among Mixed Game Festival draw games (with Archie, Ari, Badacey, Badeucey, Badugi, Badugi Hi-low). Haney describes the "Drawmaha High-Dugi" version in the Coach's Game and says a single high pair in four suits (e.g. K♣ K♠ 10♦ 4♥ 3♥) will typically be the best badugi at showdown.
- PokerChipForum thread (2022): the OP dropped Hi-dugi from a home mix because of the explanation burden and kept Badugi and Archie as the two draw games.
- Origin of the name: "dugi" from Badugi; inventor not documented.

## Related games
badugi, badugi-hi-lo, badugi-high-drawmaha, archie

## Sources
- https://cardplayerlifestyle.com/poker-tips-strategy/mixed-game-poker-rules/ - Hi-dugi rules paragraph
- https://www.cardplayer.com/cardplayer-poker-magazines/66506-chad-eveslage-36-2/articles/24732-the-coach-s-game-at-resorts-world-part-1 - Drawmaha High-Dugi explanation, Coach's Game list
- https://www.pokerchipforum.com/threads/hi-dugi-hand-ranking.87914/ - AAAA best; rainbow beats AAAQ example
- https://forumserver.twoplustwo.com/21/other-poker-games/hi-dugi-1741155/ - search snippet only (HTTP 403): 5-card split description

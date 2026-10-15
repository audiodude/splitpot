---
slug: drawmaha
name: Drawmaha
abbrevs: [Drawmaha High, Dramaha]
nicknames: ["Sviten (original name per SwC Poker)", "Sviten Special (the one-card-open version)", "Dramaha", "Omaha-draw hybrid", "5-card draw + Omaha"]
family: hybrid
wins: [high]
usualStructure: [limit, pot-limit]
holeCards: 5
draws: 1
players: "2-7 (WSOP maximum 7; some sources say 5 if full 5-card draws are allowed)"
parent: null
canonicalSource: "WSOP 2026 Live-Action Rules (\"Drawmaha\" Omaha High-Variation, 7 participant maximum); procedure/variant detail from PokerListings, Card Player Lifestyle, SwC Poker, CountingOuts"
---
## Deal & structure
Every player gets **five** hole cards. The five cards do double duty: after the one draw they form a five-card high hand (the "draw hand") AND any two of them, with three board cards, form an Omaha hand. The pot is split in half between the winner of each.

Order of play (WSOP Live-Action; Card Player Lifestyle; the other sources agree except where noted under "Rooms disagree"):
1. Button + small and big blind (WSOP: one blind, several blinds, an ante, or blinds+ante are all allowed). Deal five cards face down to each player. Betting round 1 (starts left of the big blind).
2. Dealer burns and deals a three-card flop. Betting round 2 (starts left of the button).
3. **The draw.** Starting left of the button, each player declares how many cards to replace and pushes those discards forward; once a card is declared "it cannot be changed" (WSOP). The WSOP rule lets a player draw **1 to 3** cards or stand pat. Dealer burns and places the turn; draw cards are then dealt to the players who drew (WSOP and Card Player Lifestyle: turn placed before the replacement cards go out; other rooms deal the draw cards first - see below). Betting round 3.
4. River (burn first), betting round 4, showdown.

Structure: WSOP lists limit, no-limit or pot-limit. CountingOuts says in a casino it is spread as a limit game; PokerListings and SwC Poker say pot-limit is typical (SwC also runs fixed-limit and no-limit). Four betting rounds; in limit games the small bet should be used pre-flop and on the flop and the big bet on the turn and river (standard flop-game convention [INFERENCE - no source I opened states it for Drawmaha]).

Players: WSOP caps Drawmaha at 7. Poker Game Database says 2-6. PokerListings says five players if everyone may draw all five cards, or up to seven if the draw is capped at three. The deck runs short because of the draw; stub/reshuffle handling follows house draw rules (WSOP Live-Action sends you to its single-draw lowball reshuffle rules; PokerListings: mucked cards, excluding the board burns, are reshuffled and the deck is cut).

Named sub-variants (the draw half changes; Omaha half is always Omaha **high**): Drawmaha 2-7, Drawmaha A-5, Drawmaha Badugi (Drawmadugi / Dramadugi), Drawmaha Badugi High (Hi-dugi), Drawmaha 49, Drawmaha Zero, and Sviten Special (below). WSOP's rulebook lists "High, 2-7, Ace-5, Badugi, Badugi High and 49" as the variations of Drawmaha; Card Player Lifestyle adds Zero and Sviten Special. In the 2-7 version the five-card half is 2-7 lowball (aces high, straights/flushes count against), in A-5 it is ace-to-five low, Badugi uses the best four-card badugi from the five cards, and 49 uses a pip count: face cards 0, ace 1, other cards face value, highest total wins, best hand T-T-T-T-9 = 49 (WSOP; Card Player Lifestyle; Zero is the mirror, lowest pip count). The WSOP text says "all rules of single draw rules apply to the draw portion" for the chosen draw type. These are covered in separate dossiers/notes; the structure above is the same for all.

**Sviten Special (variant; now has its own dossier, `sviten-special`).** Same game with one twist: if you draw exactly **one** card, the dealer turns it face up so everyone sees it, and you may keep it or reject it for the next card, dealt face down, which you must keep (PokerListings; Card Player Lifestyle: "One-card Open rule"; SwC Poker; PokerNews Aug 2026 all agree). The rule does not apply when drawing two or more. WSOP's Drawmaha rules do not mention it. Origin is disputed: see "Lore & reputation".

## Showdown / what wins
Two independent halves, computed from the **final** five cards after the draw (discarded cards no longer count for anything):
- **Omaha half:** best five-card high hand using **exactly two** of your five hole cards and **exactly three** board cards (all Omaha rules; WSOP: "all the rules of Omaha High apply for the Omaha portion"). The board cards are used only for this half.
- **Draw half:** best five-card hand made **only** from your five hole cards (ordinary high poker rankings in Drawmaha High; ace is high, A-2-3-4-5 the lowest straight, flushes beat straights, etc. - PokerListings: "there are no exceptions to this ordering").
- One player may win both halves (scoop). Ties split the half; odd chip: WSOP Drawmaha text says the odd chip after the split goes "by position, starting clockwise from the button". WSOP's separate mixed-game procedure says "all button games, odd chip will go to the worst position"; follow the room's posted rule.
- Because only the final five cards matter, a player who breaks a good Omaha holding to draw loses it; Steve Badger (hobby author) argues the draw hand is the more important half: once the draw is done the best draw hand cannot be beaten by a river card, whereas the Omaha half can change on the river.

### Tricky showdowns (exact cards: s h d c)
**1. The draw half beats the Omaha half; halves go to different players.** Board: Qs 8s 3s 7d 2c. Player A (final hand): Kh Kd Kc 4s 4d. Player B (final hand): As Js 9h 6c 2d.
- Draw half: A has a full house, kings full of fours; B has ace-high. A wins the draw half.
- Omaha half: A can use only two of his cards with the board: Kh Kd + Qs 8s 7d = a pair of kings (A holds only one spade, so no flush). B uses As Js + Qs 8s 3s = ace-high flush. B wins the Omaha half.
- Result: pot split one half each. A's monster draw hand is nearly worthless in the Omaha half; B's nut-flush Omaha hand is only ace-high in the draw half.

**2. Scoop with the same five cards.** Board: 9h 8c 7d 2s Ks. Player C: 6s 5s 4c 3d 2h. Player D: Kh Kd 4s 4h Jc.
- Draw half: C holds 6-5-4-3-2 (a six-high straight); D holds two pair. C wins.
- Omaha half: C uses 6s 5s plus board 9h 8c 7d = a nine-high straight; D uses Kh Kd + Ks 9h 8c = three kings. A straight beats trips; C wins.
- C scoops. The same five cards served two different hands - draw hand uses all five, Omaha hand uses the two cards that connect with the board.

**3. Drawmaha 2-7: low draw half vs broadway Omaha half (the draw half is a 2-7 low, not a high).** Board: As Kd Qc Jh 9s. Player E (final hand): 7s 5d 4c 3h 2s. Player F: Ah Kh Th Ts 8d.
- 2-7 half: E has 7-5-4-3-2 (not suited, not a straight), the nut low. F's A-K-T-T-8 is a pair of tens - terrible for low. E wins the 2-7 half.
- Omaha half: F uses hole Ah Th with board Kd Qc Jh = A-K-Q-J-T, a broadway straight. E's best is ace-high junk (no pair, only two board spades). F wins the Omaha half.
- Result: halves split. Note that E's perfect low hand has no shot at the Omaha half: Badger's advice for 2-7 Drawmaha is "don't draw" - pat 2-7 hands are strong precisely because you can't be drawn out on, but the best 2-7 hands are poor Omaha hands.

**4. Better draw hand, worse Omaha hand - the board straight goes to the other player.** Board: 5h 6d 7c Kc Kd. Player G: Ah Ac 4h 3d 8s. Player H: 9h 9d 8h 4c 2s.
- Draw half: G holds a pair of aces (A-A-8-4-3); H holds a pair of nines (9-9-8-4-2). G wins the draw half.
- Omaha half: G's best is hole 4h 8s with board 5h 6d 7c = 4-5-6-7-8, an eight-high straight. H's best is hole 9h 8h with the same board cards = 5-6-7-8-9, a nine-high straight. (Both beat their own two-pair/trips options; G's AA with the board kings makes only two pair.) H wins the Omaha half.
- Result: halves split. G's top pair made the better draw hand but the nine-high straight beat G's eight-high straight - a different pair of hole cards unlocked a higher straight.

## Rooms disagree
- **Draw cap:** WSOP Live-Action: draw 1 to 3 cards or stand pat. Card Player Lifestyle: "often capped at 3" to avoid reshuffles; confirm in advance. PokerListings: up to all five with five or fewer players, three max with six or seven. SwC Poker: up to all five. A Poker Chip Forum home-game poster: his group caps at 2 cards ("Draw2maha"), and a one-card cap if more than five players at the draw; he says Vegas at the Mixed Game Festival allowed three.
- **BARGE (hobbyist group) procedures, as reported by the teammate who researched the sub-variant dossiers (not opened by me):** base Dramaha lets players draw 0-5; Dramaha 49/Zero/21/Dramadugi draw 0-3; BARGE also spreads "Triple Draw Dramaha" where the draw comes BEFORE flop betting with three draws. WSOP's 1-3 card cap and flop-before-draw order are the casino-standard version.
- **When the turn comes versus the draw cards:** WSOP Live-Action and Card Player Lifestyle: players declare how many to draw, the dealer burns and places the turn, then the draw cards are dealt, then betting. PokerListings, SwC Poker, CountingOuts, Canadianpoker.com and a Poker Chip Forum home-game poster describe the draw cards being dealt first and the turn after. In the WSOP order the discards are already locked in before the turn is shown, so strategically the two are close; the difference is which cards come off the deck and the burn count. [INFERENCE on equivalence.]
- **One-card-open (Sviten) rule:** Sviten Special/some online rooms/home games only; WSOP does not include it. Whether the player may reject the face-up card: all sources say yes; SwC adds the replacement is forced.
- **Betting structure:** limit (CountingOuts; Steve Badger; Vegas mixed games) vs pot-limit (PokerListings, SwC, Jim Donahue's book per CountingOuts) vs no-limit available at WSOP. If a room says "Drawmaha" without more, ask.
- **Players:** WSOP 7 max; Poker Game Database 6; PokerListings 5 or 7 depending on the draw cap.
- **Odd chip:** WSOP's Drawmaha paragraph says by position clockwise from the button; WSOP's mixed-games procedure says worst position.
- **Names:** Card Player Lifestyle lists Sviten Special as a Drawmaha variant; SwC says Sviten is the original name. Jim Donahue's book and Steve Badger's pages call the game Dramaha; Badger adds that some insist on "drawmaha" even though "there is a different game by that name" without saying what it is [unclear what he means].

## Common newcomer mistakes
- Forgetting the Omaha half uses exactly two hole cards: five-card combinations do not help it; only the draw half uses all five cards.
- Looking at both halves with the pre-draw hand and then discarding cards that were part of your Omaha holding.
- Planning to draw four or five cards in a WSOP game; the WSOP cap is three.
- Playing a big Omaha holding that cannot win the draw half (e.g., A-K-Q-J-x with no pair): PokerListings notes the best Omaha starting hands rarely win the draw half, so it is a one-way hand.
- Playing a good draw hand only: the Omaha half can still be lost on the board; Badger suggests having both halves in mind but valuing the draw hand more.
- Not tracking the number of cards each opponent draws: a one-card draw is dangerous (PokerListings; Sviten gives them a look at one card), drawing four is usually a pair at best.
- In 2-7 Drawmaha, drawing to a low when you already have a good pat 2-7 hand: Badger: "don't draw" - pat hands rule.
- Thinking the same player must win both halves to take any money; a pair of nines and an ace-high flush can each win half.

## Lore & reputation
- **Origin of Sviten (sources conflict).** PokerNews (Aug 2026) says the game was devised in **2004** by Anders "Bengan" Bengtsson in Sweden, who suggested combining Omaha and five-card draw during a short-handed mixed game, after which his group kept playing it. SwC Poker instead says "Sviten" is the original name and that the game was invented at the Sviten poker club in Stockholm in **summer 2006**. No source I read reconciles the two; PokerNews is independent editorial, SwC is an online room's own rules page. Canadianpoker.com repeats the Sweden/Sviten origin only. PokerNews also describes Sviten Special as a regular at OlyBet festivals in the Baltics (Olympic Park Casino, Tallinn) and says the €555 Sviten Special at WSOP Circuit Tallinn 2025 was the first standalone Sviten event to award a WSOP Circuit gold ring (per the article text; I did not open its linked 2025 event report).
- CountingOuts: spread in Las Vegas "especially when the WSOP is in town", with 2-7 Drawmaha growing; the 5-card draw high version has Jim Donahue's book "Dramaha" (8/10 on CountingOuts) devoted to it. In a casino it is spread limit, in the book's home games pot-limit.
- WSOP Live-Action includes full Drawmaha rules; the PokerNews listing of WSOP Dealer's Choice games and Card Player Lifestyle's Mixed Game Festival rulebook include it among the draw/hybrid mix [Card Player Lifestyle opened; PokerNews listing only seen as a search snippet].
- Steve Badger (hobby author): "Dramaha High" is the "Cadillac", 2-7 Dramaha "closer to the Pinto" (opinion).
- Kill pots and 49/Zero are lighter-weight add-ons; "Drawmaha 49" and "Drawmaha Zero" are described only by Card Player Lifestyle and the WSOP rule sheet.

## Related games
omaha-hi-lo, sviten-special, 2-7-drawmaha, a-5-drawmaha, badugi-drawmaha, badugi-high-drawmaha, drawmaha-49, drawmaha-zero, drawmaha-21, five-card-draw, 2-7-single-draw, courchevel, archie

## Sources
- /tmp/wsop.txt (WSOP 2026 Live-Action Rules PDF, https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf) - Drawmaha section: 7 max, 1-3 card draw, odd chip
- https://www.pokerlistings.com/poker-rules/drawmaha-poker - flow, one-card-open, 5/3 card cap
- https://www.countingouts.com/drawmaha-rules-and-basic-strategy/ - High/2-7 versions, Vegas, limit vs pot-limit
- https://cardplayerlifestyle.com/poker-tips-strategy/mixed-game-poker-rules/ - Drawmaha variant list, declare-burn-turn-draw order
- https://swcpoker.club/poker-rules/draw-poker-games/drawmaha-sviten-poker - Sviten origin claim, rules, pot-limit
- https://www.canadianpoker.com/en/poker-rules/drawmaha-rules/ - Sviten Special rules and flow
- http://www.stevebadger.com/poker/dramaha/ - strategy, three variants, name note
- https://pokergamedatabase.com/games/dramaha.html - 2-6 players, double-duty cards
- https://www.pokerchipforum.com/threads/drawmaha-procedure-questions-with-a-poll.120938/ - procedure differences (Vegas vs home)
- https://wsop.gg-global-cdn.com/wsop/pdfs/2025-WSOP-Tournament-Rules.pdf - checked; no Drawmaha section
- https://www.pokernews.com/strategy/how-to-play-sviten-special-poker-rules-gameplay-strategy-52241.htm - Sviten origin (2004, Bengtsson), one-card-open, Tallinn

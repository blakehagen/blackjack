$(document).ready(function () {
  
    // HIDE NON_ESSENTIAL BUTTONS ON LOAD //

    $('#nextHand').hide();
    $('.hands-button').hide();
    $('#cash-view').hide();
    $('#stay-button').hide();
    $('#hit').hide();
    $('#bet').hide();
    $('#place-bet').hide();

    $('#bet-50').hide();
    $('#bet-100').hide();
    $('#bet-all').hide();
    $('#bet-other').hide();
        
    // Card Constructor //
  
    var Card = function (card, suit, id, value) {
        this.card = card;
        this.suit = suit;
        this.id = id;
        this.value = value;
        // this.altValue = altValue;
        this.whoAmI = function () {
            console.log("I'm a " + this.card + " of " + this.suit + ".");
        };
        if (suit === "hearts") {
            this.imgTag = '<img src="assets/heart.png">';
            this.bottomImg = '<img src="assets/heart-inverted.png">'
        } else if (suit === "spades") {
            this.imgTag = '<img src="assets/spade.png">';
            this.bottomImg = '<img src="assets/spade-inverted.png">';
        } else if (suit === "clubs") {
            this.imgTag = '<img src="assets/club.png">';
            this.bottomImg = '<img src="assets/club-inverted.png">';
        } else if (suit === "diamonds") {
            this.imgTag = '<img src="assets/diamond.png">';
            this.bottomImg = '<img src="assets/diamond-inverted.png">';
        }
    };
  
    // GET FRESH DECK OF CARDS //
  
    function freshDeck() {

        var deck = [];

        var twoHearts = new Card("two", "hearts", "2", 2);
        var twoSpades = new Card("two", "spades", "2", 2);
        var twoClubs = new Card("two", "clubs", "2", 2);
        var twoDiamonds = new Card("two", "diamonds", "2", 2);

        var threeHearts = new Card("three", "hearts", "3", 3);
        var threeSpades = new Card("three", "spades", "3", 3);
        var threeClubs = new Card("three", "clubs", "3", 3);
        var threeDiamonds = new Card("three", "diamonds", "3", 3);

        var fourHearts = new Card("four", "hearts", "4", 4);
        var fourSpades = new Card("four", "spades", "4", 4);
        var fourClubs = new Card("four", "clubs", "4", 4);
        var fourDiamonds = new Card("four", "diamonds", "4", 4);

        var fiveHearts = new Card("five", "hearts", "5", 5);
        var fiveSpades = new Card("five", "spades", "5", 5);
        var fiveClubs = new Card("five", "clubs", "5", 5);
        var fiveDiamonds = new Card("five", "diamonds", "5", 5);

        var sixHearts = new Card("six", "hearts", "6", 6);
        var sixSpades = new Card("six", "spades", "6", 6);
        var sixClubs = new Card("six", "clubs", "6", 6);
        var sixDiamonds = new Card("six", "diamonds", "6", 6);

        var sevenHearts = new Card("seven", "hearts", "7", 7);
        var sevenSpades = new Card("seven", "spades", "7", 7);
        var sevenClubs = new Card("seven", "clubs", "7", 7);
        var sevenDiamonds = new Card("seven", "diamonds", "7", 7);

        var eightHearts = new Card("eight", "hearts", "8", 8);
        var eightSpades = new Card("eight", "spades", "8", 8);
        var eightClubs = new Card("eight", "clubs", "8", 8);
        var eightDiamonds = new Card("eight", "diamonds", "8", 8);

        var nineHearts = new Card("nine", "hearts", "9", 9);
        var nineSpades = new Card("nine", "spades", "9", 9);
        var nineClubs = new Card("nine", "clubs", "9", 9);
        var nineDiamonds = new Card("nine", "diamonds", "9", 9);

        var tenHearts = new Card("ten", "hearts", "10", 10);
        var tenSpades = new Card("ten", "spades", "10", 10);
        var tenClubs = new Card("ten", "clubs", "10", 10);
        var tenDiamonds = new Card("ten", "diamonds", "10", 10);

        var jackHearts = new Card("jack", "hearts", "J", 10);
        var jackSpades = new Card("jack", "spades", "J", 10);
        var jackClubs = new Card("jack", "clubs", "J", 10);
        var jackDiamonds = new Card("jack", "diamonds", "J", 10);

        var queenHearts = new Card("queen", "hearts", "Q", 10);
        var queenSpades = new Card("queen", "spades", "Q", 10);
        var queenClubs = new Card("queen", "clubs", "Q", 10);
        var queenDiamonds = new Card("queen", "diamonds", "Q", 10);

        var kingHearts = new Card("king", "hearts", "K", 10);
        var kingSpades = new Card("king", "spades", "K", 10);
        var kingClubs = new Card("king", "clubs", "K", 10);
        var kingDiamonds = new Card("king", "diamonds", "K", 10);

        var aceHearts = new Card("ace", "hearts", "A", 11);
        var aceSpades = new Card("ace", "spades", "A", 11);
        var aceClubs = new Card("ace", "clubs", "A", 11);
        var aceDiamonds = new Card("ace", "diamonds", "A", 11);
    
        // Push Cards into 'deck' array //
        deck.push(twoHearts, twoSpades, twoClubs, twoDiamonds, threeHearts, threeSpades, threeClubs, threeDiamonds, fourHearts, fourSpades, fourClubs, fourDiamonds, fiveHearts, fiveSpades, fiveClubs, fiveDiamonds, sixHearts, sixSpades, sixClubs, sixDiamonds, sevenHearts, sevenSpades, sevenClubs, sevenDiamonds, eightHearts, eightSpades, eightClubs, eightDiamonds, nineHearts, nineSpades, nineClubs, nineDiamonds, tenHearts, tenSpades, tenClubs, tenDiamonds, jackHearts, jackSpades, jackClubs, jackDiamonds, queenHearts, queenSpades, queenClubs, queenDiamonds, kingHearts, kingSpades, kingClubs, kingDiamonds, aceHearts, aceSpades, aceClubs, aceDiamonds);
        return deck;
    };
  
    // FUNCTION TO SHUFFLE THE DECK ("Fisher-Yates" Algorithm) // 
  
    function shuffle(array) {
        var m = array.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
  
    // SHUFFLE THE DECK //
    // shuffle(deck);  --> Now you have a shuffled deck! //
  
    //  DEAL //
  
    var playerHand = [];
    var player = 0;
    var dealerHand = [];
    var dealer = 0;

    function deal(arr) {
        playerHand.push(arr[0], arr[2]);
        dealerHand.push(arr[1], arr[3]);
        arr.splice(0, 4);
    };
  
    // SET STARTING HAND VALUES //
  
    // PLAYER
  
    function playerCount() {
        player = playerHand[0].value + playerHand[1].value;
        // return player;
    }
  
    // DEALER
  
    function dealerCount() {
        dealer = dealerHand[0].value + dealerHand[1].value;
        // return dealer;
    }
  
    // PLAYER HIT FUNCTION //
  
    function hitPlayer() {
        playerHand.push(deck[0]);
        deck.splice(0, 1);
        player = player + playerHand[playerHand.length - 1].value;
        var aceCountPlayer = 0;
        if (player > 21) {
            for (var i = 0; i < playerHand.length; i++) {
                if (playerHand[i].id === "A" && playerHand[i].value !== 1) {
                    aceCountPlayer++;
                    player = player - 10;
                    console.log(player);
                    playerHand[i].value = 1
                }
            }
        }
        return player;
    };
  
    // DEALER HIT FUNCTION //
  
    function hitDealer() {
        dealerHand.push(deck[0]);
        dealer = dealer + dealerHand[dealerHand.length - 1].value;
        deck.splice(0, 1);
        var aceCountDealer = 0
        if (dealer > 21) {
            for (var i = 0; i < dealerHand.length; i++) {
                if (dealerHand[i].id === "A" && dealerHand[i].value !== 1) {
                    aceCountDealer++;
                    dealer = dealer - 10;
                    console.log(dealer);
                    dealerHand[i].value = 1
                }
            }
        }
        $('#dealerCards').append('<div class="card"><div class="card-suit suit-left">' + dealerHand[dealerHand.length - 1].imgTag + '</div><div class="card-text"><h2>' + dealerHand[dealerHand.length - 1].id + '</h2></div><div class="card-suit suit-right">' + dealerHand[dealerHand.length - 1].bottomImg + '</div></div>');
    };
  
    // RESET HANDS BACK TO ZERO, RESET DECK , RESET BET //
    var cashCount = 500;
    var handsPlayed = 0;

    function startNewGame(freshDeck) {
        cashCount = 500;
        handsPlayed = 0;
        playerHand = [];
        player = 0;
        dealerHand = [];
        dealer = 0;
        deck = freshDeck();
        shuffle(deck);
        bet = 0;
    };
  
    // On "Start New Game" button click, activate above function //
  
    $('#startNewGame').on('click', function () {
        startNewGame(freshDeck);
        $('#nextHand').hide();
        $('.hands-button').show();
        $('#cash-view').show();
        $('#message-text').empty();
        $('#message-text').append('<h6>' + messages.placeBet + '</h6>');
        $('#bet').hide();
        $('#place-bet').hide();

        $('#bet-50').show();
        $('#bet-100').show();
        $('#bet-all').show();
        $('#bet-other').show();



        $('#cashCount').empty();
        $('#cashCount').append(cashCount);
        $('#handsPlayed').empty();
        $('#handsPlayed').append(handsPlayed);
        $('#dealerCards').empty();
        $('#playerCards').empty();
    });
  
    // CHECK BET VALIDITY  //
  
    var bet = 0;
    var validBet = false;
    
    // Bet Easy Buttons //
    
    $('#bet-50').on('click', function () {
        bet = 50;
        validBet = true;
        betIsPlaced();
    });

    $('#bet-100').on('click', function () {
        bet = 100;
        validBet = true;
        betIsPlaced();
    });

    $('#bet-all').on('click', function () {
        bet = cashCount;
        validBet = true;
        betIsPlaced();
    });

    $('#bet-other').on('click', function () {
        $('#bet').show();
        $('#place-bet').show();

        $('#bet-50').hide();
        $('#bet-100').hide();
        $('#bet-all').hide();
        $('#bet-other').hide();
    });

    $('#place-bet').on('click', function () {
        validBet = false;
        betIsPlaced();
    });

    function placeBet() {
        if (validBet === true) {
            // bet = $('#bet').val();
            cashCount = cashCount - bet;
            $('#cashCount').text(cashCount);
            deal(deck);
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.playerAction + '</h6>');
            console.log("I AM HERE");
            return true;
        }
        bet = 0;
        bet = $('#bet').val();
        console.log("line303 " + bet);
        if (parseInt(bet) > parseInt(cashCount)) {
            validBet = false;
            $('#bet').val('');
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.betError3 + '</h6>');
        } else if (isNaN(bet) === true) {
            validBet = false;
            $('#bet').val('');
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.betError2 + '</h6>');
        } else if (!bet) {
            validBet = false;
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.betError1 + '</h6>');
        } else {
            cashCount = cashCount - bet;
            validBet = true;
            deal(deck);
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.playerAction + '</h6>');
        }
    };
    

  
    // BET IS PLACED FUNCTION //
    
    function betIsPlaced() {
        placeBet();
        if (validBet !== true) {
            return false;
        }

        $('#bet').val('');
        $('#cashCount').text(cashCount);

        handsPlayed = handsPlayed + 1;
        $('#handsPlayed').empty();
        $('#handsPlayed').append(parseInt(handsPlayed));
        
        //Hide all bet buttons //
        $('#bet').hide();
        $('#place-bet').hide();
        $('#bet-50').hide();
        $('#bet-100').hide();
        $('#bet-all').hide();
        $('#bet-other').hide();
    
        // Show Hit & Stand Buttons //
        $('#stay-button').show();
        $('#hit').show();

        $('#nextHand').hide();
    
        // DEAL CARDS //
        $('#dealerCards').append('<div class="card hidden"></div><div class="card"><div class="card-suit suit-left">' + dealerHand[1].imgTag + '</div><div class="card-text"><h2>' + dealerHand[1].id + '</h2></div><div class="card-suit suit-right">' + dealerHand[1].bottomImg + '</div></div>');

        $('#playerCards').append('<div class="card"><div class="card-suit suit-left">' + playerHand[0].imgTag + '</div><div class="card-text"><h2>' + playerHand[0].id + '</h2></div><div class="card-suit suit-right">' + playerHand[0].bottomImg + '</div></div><div class="card"><div class="card-suit suit-left">' + playerHand[1].imgTag + '</div><div class="card-text"><h2>' + playerHand[1].id + '</h2></div><div class="card-suit suit-right">' + playerHand[1].bottomImg + '</div></div>');
        playerCount();
        console.log("INITIAL PLAYER COUNT = " + player);

        if (player === 21) {
            $('#stay-button').hide();
            $('#hit').hide();
            $('#nextHand').show();
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.player21 + '</h6>');
            $('#cashCount').empty();
            cashCount = parseInt(cashCount) + ((parseInt(bet) * 1.5) + parseInt(bet));
            $('#cashCount').append(cashCount);
        }
    }

    // $('#place-bet').on('click', function () {
    //     placeBet();
    //     if (validBet !== true) {
    //         return false;
    //     }
    //     betIsPlaced();
    // });
    // $('#cashCount').text(cashCount);
    // $('#bet').val('');
    // handsPlayed = handsPlayed + 1;
    // $('#handsPlayed').empty();
    // $('#handsPlayed').append(parseInt(handsPlayed));
    
    // Show Hit & Stand Buttons ---- Hide Bet Buttons //
    // $('#stay-button').show();
    // $('#hit').show();
    // $('#bet').hide();
    // $('#place-bet').hide();
    // $('#nextHand').hide();
    
    //     // DEAL CARDS ONCE BET IS SUBMITTED //
    //     $('#dealerCards').append('<div class="card hidden"></div><div class="card"><div class="card-suit suit-left">' + dealerHand[1].imgTag + '</div><div class="card-text"><h2>' + dealerHand[1].id + '</h2></div><div class="card-suit suit-right">' + dealerHand[1].bottomImg + '</div></div>');

    //     $('#playerCards').append('<div class="card"><div class="card-suit suit-left">' + playerHand[0].imgTag + '</div><div class="card-text"><h2>' + playerHand[0].id + '</h2></div><div class="card-suit suit-right">' + playerHand[0].bottomImg + '</div></div><div class="card"><div class="card-suit suit-left">' + playerHand[1].imgTag + '</div><div class="card-text"><h2>' + playerHand[1].id + '</h2></div><div class="card-suit suit-right">' + playerHand[1].bottomImg + '</div></div>');
    //     playerCount();
    //     console.log("INITIAL PLAYER COUNT = " + player);

    //     if (player === 21) {
    //         $('#stay-button').hide();
    //         $('#hit').hide();
    //         $('#nextHand').show();
    //         $('#message-text').empty();
    //         $('#message-text').append('<h6>' + messages.player21 + '</h6>');
    //         $('#cashCount').empty();
    //         cashCount = parseInt(cashCount) + ((parseInt(bet) * 1.5) + parseInt(bet));
    //         $('#cashCount').append(cashCount);
    //     }
    // });
  
    // YOU'RE BROKE FUNCTION //
  
    function broke() {
        if (parseInt(cashCount) === 0) {
            validBet = false;
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.betError4 + '</h6>');
            $('#bet').hide();
            $('#place-bet').hide();
            $('#nextHand').hide();
            $('#dealerCards').empty();
            $('#playerCards').empty();
            return false;
        }
        return true;
    };
  
    // NEXT HAND //
  
    function nextHand(freshDeck) {
        playerHand = [];
        player = 0;
        dealerHand = [];
        dealer = 0;
        deck = freshDeck();
        shuffle(deck);
        bet = 0;
    };

    $('#nextHand').on('click', function () {
        nextHand(freshDeck);
        broke();
        if (broke() === false) {
            return false;
        }
        $('#dealerCards').empty();
        $('#playerCards').empty();
        $('#message-text').empty();
        $('#message-text').append('<h6>' + messages.placeBet + '</h6>');
        $('#bet').hide();
        $('#place-bet').hide();
        $('#bet-50').show();
        $('#bet-100').show();
        $('#bet-all').show();
        $('#bet-other').show();
        $('#nextHand').hide();
    });
  
    // HIT PLAYER ACTION //
  
    $('#hit').on('click', function () {
        hitPlayer();
        $('#playerCards').append('<div class="card"><div class="card-suit suit-left">' + playerHand[playerHand.length - 1].imgTag + '</div><div class="card-text"><h2>' + playerHand[playerHand.length - 1].id + '</h2></div><div class="card-suit suit-right">' + playerHand[playerHand.length - 1].bottomImg + '</div></div>');

        console.log(playerHand);
        console.log("PLAYER COUNT AFTER HIT = " + player);

        if (player > 21) {
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.playerBust + '</h6>');
            $('#hit').hide();
            $('#stay-button').hide();
            $('#nextHand').show();
        };
    });
   
    // PLAYER STAY  -- locks in player value and triggers dealers hand //
  
    $('#stay-button').on('click', function () {
        // show dealer's hidden card //
        $('#dealerCards').empty();
        $('#dealerCards').append('<div class="card"><div class="card-suit suit-left">' + dealerHand[0].imgTag + '</div><div class="card-text"><h2>' + dealerHand[0].id + '</h2></div><div class="card-suit suit-right">' + dealerHand[0].bottomImg + '</div></div><div class="card"><div class="card-suit suit-left">' + dealerHand[1].imgTag + '</div><div class="card-text"><h2>' + dealerHand[1].id + '</h2></div><div class="card-suit suit-right">' + dealerHand[1].bottomImg + '</div></div>');

        $('#hit').hide();
        $('#stay-button').hide();

        dealerCount();
        if (dealer === 21) {
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.dealer21 + '</h6>');
            $('#nextHand').show();
            return false;
        }

        console.log("PLAYER TOTAL: " + player);
        console.log("DEALER TOTAL(initial): " + dealer);

        gameLogic();
    });
  
    // MESSAGE CENTER //
  
    var messages = {
        start: 'Click "New Game" to play blackJack 1.0',
        placeBet: 'Place your bet!',
        betError1: 'You didn\'t place your bet!',
        betError2: 'Enter a valid bet!',
        betError3: 'You don\'t have that much money!',
        betError4: 'You\'re broke! Start a new game!',
        playerAction: 'Hit or Stay?',
        playerBust: 'You busted!',
        dealerBust: 'Dealer busted! YOU WIN!',
        push: 'Push',
        player21: 'Blackjack! YOU WIN!',
        dealer21: 'Dealer Blackjack. You lost!',
        playerLost: 'You lost!',
        playerWin: 'You Won!!'
    };
  
    // GAME LOGIC //
  
    function gameLogic() {
        if (dealer < 17) {
            hitDealer();
        }
        console.log("dealer: " + dealer);

        if (dealer > 21) {
            $('#message-text').empty();
            $('#message-text').append('<h6>' + messages.playerWin + '</h6>');

            $('#cashCount').empty();
            cashCount = parseInt(cashCount) + (parseInt(bet) + parseInt(bet));
            $('#cashCount').append(cashCount);

            $('#nextHand').show();
        }
        if (dealer >= 17 && dealer <= 21) {
            if (dealer > player) {
                $('#message-text').empty();
                $('#message-text').append('<h6>' + messages.playerLost + '</h6>');
                $('#nextHand').show();
            } else if (player > dealer) {
                $('#message-text').empty();
                $('#message-text').append('<h6>' + messages.playerWin + '</h6>');
                $('#nextHand').show();
                $('#cashCount').empty();
                cashCount = parseInt(cashCount) + (parseInt(bet) + parseInt(bet));
                $('#cashCount').append(cashCount);
            } else if (dealer === player) {
                $('#message-text').empty();
                $('#message-text').append('<h6>' + messages.push + '</h6>');
                $('#nextHand').show();
                $('#cashCount').empty();
                cashCount = parseInt(cashCount) + parseInt(bet);
                $('#cashCount').append(cashCount);
            }
        }
        if (dealer < 17) {
            hitDealer();
            gameLogic();
        }
    };


});


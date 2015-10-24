


// // // Card Constructor // // //
var id = 1;
var Card = function(card, suit, value, altValue){
	this.card = card;
	this.suit = suit;
	this.value = value;
	this.altValue = altValue;
	this.id = id++;
	this.shuffle = function(){
		console.log("I'm a " + this.card + " of " + this.suit + ".");
	};
};

// // // // DECK OF CARDS // // // //

var deck = [];

var twoHearts = new Card("two", "hearts", 2);
var twoSpades = new Card("two", "spades", 2);
var twoClubs = new Card("two", "clubs", 2);
var twoDiamonds = new Card("two", "diamonds", 2);

var threeHearts = new Card("three", "hearts", 3);
var threeSpades = new Card("three", "spades", 3);
var threeClubs = new Card("three", "clubs", 3);
var threeDiamonds = new Card("three", "diamonds", 3);

var fourHearts = new Card("four", "hearts", 4);
var fourSpades = new Card("four", "spades", 4);
var fourClubs = new Card("four", "clubs", 4);
var fourDiamonds = new Card("four", "diamonds", 4);

var fiveHearts = new Card("five", "hearts", 5);
var fiveSpades = new Card("five", "spades", 5);
var fiveClubs = new Card("five", "clubs", 5);
var fiveDiamonds = new Card("five", "diamonds", 5);

var sixHearts = new Card("six", "hearts", 6);
var sixSpades = new Card("six", "spades", 6);
var sixClubs = new Card("six", "clubs", 6);
var sixDiamonds = new Card("six", "diamonds", 6);

var sevenHearts = new Card("seven", "hearts", 7);
var sevenSpades = new Card("seven", "spades", 7);
var sevenClubs = new Card("seven", "clubs", 7);
var sevenDiamonds = new Card("seven", "diamonds", 7);

var eightHearts = new Card("eight", "hearts", 8);
var eightSpades = new Card("eight", "spades", 8);
var eightClubs = new Card("eight", "clubs", 8);
var eightDiamonds = new Card("eight", "diamonds", 8);

var nineHearts = new Card("nine", "hearts", 9);
var nineSpades = new Card("nine", "spades", 9);
var nineClubs = new Card("nine", "clubs", 9);
var nineDiamonds = new Card("nine", "diamonds", 9);

var tenHearts = new Card("ten", "hearts", 10);
var tenSpades = new Card("ten", "spades", 10);
var tenClubs = new Card("ten", "clubs", 10);
var tenDiamonds = new Card("ten", "diamonds", 10);

var jackHearts = new Card("jack", "hearts", 10);
var jackSpades = new Card("jack", "spades", 10);
var jackClubs = new Card("jack", "clubs", 10);
var jackDiamonds = new Card("jack", "diamonds", 10);

var queenHearts = new Card("queen", "hearts", 10);
var queenSpades = new Card("queen", "spades", 10);
var queenClubs = new Card("queen", "clubs", 10);
var queenDiamonds = new Card("queen", "diamonds", 10);

var kingHearts = new Card("king", "hearts", 10);
var kingSpades = new Card("king", "spades", 10);
var kingClubs = new Card("king", "clubs", 10);
var kingDiamonds = new Card("king", "diamonds", 10);

var aceHearts = new Card("ace", "hearts", 11, 1);
var aceSpades = new Card("ace", "spades", 11, 1);
var aceClubs = new Card("ace", "clubs", 11, 1);
var aceDiamonds = new Card("ace", "diamonds", 11, 1);

// Push Cards into 'deck' array //

deck.push(twoHearts,twoSpades,twoClubs,twoDiamonds,threeHearts,threeSpades,threeClubs,threeDiamonds,fourHearts,fourSpades,fourClubs,fourDiamonds,fiveHearts,fiveSpades,fiveClubs,fiveDiamonds,sixHearts,sixSpades,sixClubs,sixDiamonds,sevenHearts,sevenSpades,sevenClubs,sevenDiamonds,eightHearts,eightSpades,eightClubs,eightDiamonds,nineHearts,nineSpades,nineClubs,nineDiamonds,tenHearts,tenSpades,tenClubs,tenDiamonds,jackHearts,jackSpades,jackClubs,jackDiamonds,queenHearts,queenSpades,queenClubs,queenDiamonds,kingHearts,kingSpades,kingClubs,kingDiamonds,aceHearts,aceSpades,aceClubs,aceDiamonds);

// // // // FUNCTION TO SHUFFLE THE DECK // // // //
// Uses the "Fisher-Yates Shuffle" //

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

// // // // SHUFFLE THE DECK // // // //

shuffle(deck); // --> Now you have a shuffled deck! //

// // // // DEAL // // // //

var dealerHand = [];
var playerHand = []

function deal(arr){
    playerHand.push(arr[0],arr[2]);
    dealerHand.push(arr[1], arr[3]);
};

deal(deck);

// // // // SET ORIGINAL HAND VALUES // // // //

function playerCount(){
  return playerHand[0].value + playerHand[1].value;
}

function dealerCount(){
  return dealerHand[0].value + dealerHand[1].value;
}

var player =  playerCount();
var dealer = dealerCount();

console.log(player);
console.log(dealer);
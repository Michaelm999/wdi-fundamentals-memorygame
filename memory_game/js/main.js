var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = []
var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped " + cardOne);
var cardTwo = cards[1];
cardsInPlay.push("cardTwo");
console.log("User flipped " + cardTwo);

// Check to see if two cards have been played
if (cardsInPlay.length === 2) {
	// Check to see if two cards match and provide feedback to user
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
		
	}
}
import "./style_card.scss";

const suit = (function () { 
	diamond: "♦";
    heart: "♥";
    spade: "♠";
    club: "♣";
})();

const Card = (number, suit) => {
    this.number = number;
    this.suit =  suit;

    return {number, suit};
}

let testCard = Card(4, suit.diamond);
console.log("Card number = ${testCard.number}");
console.log("Card suit = ${testCard.suit}");

const addText = () => {
    const test = document.createElement('div');
    test.textContent = "This was a successful test! How about that?";
    document.body.appendChild(test);
}



export {
    addText,
    Card,
    testCard
}

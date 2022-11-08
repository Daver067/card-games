import "./style_card.scss";

const Standard = (function () { 
	const diamond = "♦";
    const heart = "♥";
    const spade = "♠";
    const club = "♣";

    return {
        diamond,
        heart,
        spade,
        club,
    }
})();

const Card = (number, suit) => {
    //Properties
    number = number;
    suit =  suit;

    //Functions
    const getNumber = () => number;
    const getSuit = () => suit;
    const make = () => { // Makes the card as it appears on the board
        const card = document.createElement('div');
        const top_left = document.createElement('div');
        const bottom_right = document.createElement('div');
        
        card.classList.add('playing'); // Specific to Standard 52 Deck
        card.classList.add('card'); // Generic to all cards

        top_left.classList.add('top-left');
        bottom_right.classList.add('bottom-right');

        // Adds Suit and Number to opposite corners of cards
        [top_left, bottom_right].forEach(node => {
            node.textContent = suit;
            card.appendChild(node);
        });
        
        

        document.body.appendChild(card);
    };

    make();

    return {
        getNumber,
        getSuit,
        make
    };
}

let testCard = Card(4, Standard.diamond);
let testCard2 = Card(5, Standard.heart);

const addText = () => {
    const test = document.createElement('div');
    test.textContent = "This was a successful test! How about that?";
    document.body.appendChild(test);
}



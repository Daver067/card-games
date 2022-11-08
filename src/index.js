import "./style_card.scss";

const Standard = (function () { // Dictionary of Standard 52 Card deck definitions
	const suit = {
    'diamond':"♦",
    'heart': "♥",
    'spade': "♠",
    'club': "♣"
    }
    
    return {
        suit
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
            const cornerNumber = document.createElement('div');
            const cornerSuit = document.createElement('div');
            
            cornerNumber.textContent = number;
            cornerSuit.textContent = suit;
            
            node.appendChild(cornerNumber);
            node.appendChild(cornerSuit);
            
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

let testCard = Card(4, Standard.suit['diamond']);
let testCard2 = Card(5, Standard.suit['heart']);



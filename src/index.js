import "./style_card.scss";

// Dictionary of Standard 52 Card deck definitions
const Standard = (function () { 
	const suit = {
    'diamond':"♦",
    'heart': "♥",
    'spade': "♠",
    'club': "♣"
    }

    const members = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    
    return {
        suit,
        members
    }
})();

// Creates card object, and handles DOM instantiation
const Card = (number, suit) => {
    //Properties
    number = number;
    suit =  suit;

    //Functions
    const getNumber = () => number;
    const getSuit = () => suit;
    
    // Instances the card objoct in the DOM, the target arguement
    // is where in the dom the card should be instanced.
    const make = (target) => {
        const card = document.createElement('div');
        const top_left = document.createElement('div');
        const bottom_right = document.createElement('div');
        // Add CSS classes to DOM object
        card.classList.add('playing'); // Specific to Standard 52 Deck
        card.classList.add('card'); // Generic to all cards
        card.dataset.suit = suit; // Adds suit as a data attribute to DOM object.
        card.dataset.number = number;
        // Adds CSS classes to corners of the card
        top_left.classList.add('top-left');
        bottom_right.classList.add('bottom-right');
        // Adds Suit and Number to opposite corners of cards
        [top_left, bottom_right].forEach(node => {
            const cornerNumber = document.createElement('div');
            const cornerSuit = document.createElement('div');
            // Sets text content of the card corners
            cornerNumber.textContent = number;
            cornerSuit.textContent = suit;
            // Adds data attribute of suit to both symbol and Letters for each corner
            cornerNumber.dataset.suit = suit;
            cornerSuit.dataset.suit = suit;
            // Adds both corner DOM elements to parent corner
            node.appendChild(cornerNumber);
            node.appendChild(cornerSuit);
            // Adds both corner elements to parent card
            card.appendChild(node);
        });
        // Adds center div to card with class 'card-center'
        const cardCenter = document.createElement('div');
        cardCenter.classList.add('card-center');
        card.appendChild(cardCenter);
        cardCenter.dataset.number = number;
        cardCenter.dataset.suit = suit;
        switch (number) {
            case "A":
                const centerSymbol = document.createElement('div');
                centerSymbol.textContent = suit;    
                cardCenter.appendChild(centerSymbol);
                break;
            case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "10":
                for (let index = 0; index < number; index++) {
                    const centerSymbol = document.createElement('div');
                    centerSymbol.textContent = suit;
                    cardCenter.appendChild(centerSymbol);
                }
            
                break;
            case "J":
                break;
            case "Q":
                break;
            case "K":
                break; 

                
            default:
                break;
        }
        
        // TODO: Make this a target reference instead of `document.body`.
        target.appendChild(card);
    };

    return {
        getNumber,
        getSuit,
        make
    };
}

// Generates a standard deck of 52 cards.
const make52 = (target) => {
    const suitArray = [
        Standard.suit["diamond"],
        Standard.suit["heart"],
        Standard.suit["club"],
        Standard.suit["spade"]
    ]
    
    for (let index = 0; index < suitArray.length; index++) {
        const suit = suitArray[index];
        for (let index = 0; index < Standard.members.length; index++) {
            const cardNumber = Standard.members[index];
            const newCard = Card(cardNumber, suit);
        }
    }
}

// Generates 13 cards of a specified suit, to a specified target
const make13 = (suit, target) => {
    for (let index = 0; index < Standard.members.length; index++) {
        const cardNumber = Standard.members[index];
        const newCard = Card(cardNumber, suit);
        newCard.make(target);
    }
}

// Makes a grid for cards to instance to, For debug purposes.
const makeFlop = (target) => {
    const lineBreak = document.createElement('hr');
    const flop = document.createElement('div');
    flop.classList.add('flop');

    target.appendChild(lineBreak);
    target.appendChild(flop);
    
    return(flop);
}

const target = document.body;
const diamondFlop = makeFlop(target);
const heartFlop = makeFlop(target);
const clubFlop = makeFlop(target);
const spadeFlop = makeFlop(target);

const lineBreak = document.createElement('hr');
target.appendChild(lineBreak);
make13(Standard.suit['diamond'], diamondFlop);
make13(Standard.suit['heart'], heartFlop);
make13(Standard.suit['club'], clubFlop);
make13(Standard.suit['spade'], spadeFlop);

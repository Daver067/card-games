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
    
    const front = (() => {
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
        
        // Makes a center flexbox, appends it to cardCenter
        const makeCenterFlex = () => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('center-flex');
            cardCenter.appendChild(newDiv);
            return(newDiv);
        }

        // Makes a new card symbol, appends it to target
        const makeSymbol = (target) => {
            const symbol = document.createElement('div');
            symbol.textContent = suit;
            target.appendChild(symbol)
            return(symbol);
        }

        // These functions specify instructions for each type of card,
        // including instructions on how many flex containers to add.
        const makeAce = () => {
            const flex = makeCenterFlex();
            makeSymbol(flex);
            flex.dataset.number = "A";
        }

        const makeTwo = () => {
            const flex = makeCenterFlex();
            for (let i = 1; i <= number; i++) makeSymbol(flex);
        }

        const makeThree = () => {
            const flex = makeCenterFlex();
            for (let i = 1; i <= number; i++) makeSymbol(flex);
        }

        const makeFour = () => {
            const flex1 = makeCenterFlex();
            const flex2 = makeCenterFlex();
            for (let i = 1; i <= 2; i++) makeSymbol(flex1);
            for (let i = 1; i <= 2; i++) makeSymbol(flex2);
        }

        const makeFive = () => {
            const flex1 = makeCenterFlex();
            const flex2 = makeCenterFlex();
            const flex3 = makeCenterFlex();
            for (let i = 1; i <= 2; i++) makeSymbol(flex1);
            for (let i = 1; i <= 2; i++) makeSymbol(flex3);
            makeSymbol(flex2);
            flex2.dataset.number = "5";
        }

        const makeSix = () => {
            const flex1 = makeCenterFlex();
            const flex2 = makeCenterFlex();
            for (let i = 1; i <= 3; i++) makeSymbol(flex1);
            for (let i = 1; i <= 3; i++) makeSymbol(flex2);
        }

        const makeSeven = () => {
            const flex1 = makeCenterFlex();
            const flex2 = makeCenterFlex();
            const flex3 = makeCenterFlex();
            for (let i = 1; i <= 3; i++) makeSymbol(flex1);
            for (let i = 1; i <= 3; i++) makeSymbol(flex3);
            makeSymbol(flex2);
            flex2.dataset.number = "7";
        }

        const makeEight = () => {
            const flex1 = makeCenterFlex();
            const flex2 = makeCenterFlex();
            const flex3 = makeCenterFlex();
            for (let i = 1; i <= 3; i++) makeSymbol(flex1);
            for (let i = 1; i <= 3; i++) makeSymbol(flex3);
            for (let i = 1; i <= 2; i++) makeSymbol(flex2);
            flex2.dataset.number = "8";
        }

        const makeNine = () => {
            const flex1 = makeCenterFlex();
            const flex2 = makeCenterFlex();
            const flex3 = makeCenterFlex();
            for (let i = 1; i <= 4; i++) makeSymbol(flex1);
            for (let i = 1; i <= 4; i++) makeSymbol(flex3);
            makeSymbol(flex2);
            flex2.dataset.number = "5";
        }

        const makeTen = () => {
            const flex1 = makeCenterFlex();
            const flex2 = makeCenterFlex();
            const flex3 = makeCenterFlex();
            for (let i = 1; i <= 4; i++) makeSymbol(flex1);
            for (let i = 1; i <= 4; i++) makeSymbol(flex3);
            for (let i = 1; i <= 2; i++) makeSymbol(flex2);
            flex2.dataset.number = "10";
        }

        const makeJack = () => {
            const flex = makeCenterFlex();
            makeSymbol(flex);
            flex.dataset.number = "J";
        }

        const makeQueen = () => {
            const flex = makeCenterFlex();
            makeSymbol(flex);
            flex.dataset.number = "Q";
        }

        const makeKing = () => {
            const flex = makeCenterFlex();
            makeSymbol(flex);
            flex.dataset.number = "K";
        }

        const makeJoker = () => {
            card.classList.add('back')
            card.classList.remove('playing')
            card.classList.remove('card')
            card.removeChild(cardCenter);
            card.removeChild(top_left);
            card.removeChild(bottom_right);

            const symbol = document.createElement('div');
            card.appendChild(symbol)

            card.dataset.number = "joker";
        }

        const makeBack = () => {
            card.classList.add('back')
            card.classList.remove('playing')
            card.classList.remove('card')
            card.removeChild(cardCenter);
            card.removeChild(top_left);
            card.removeChild(bottom_right);

            const symbol = document.createElement('div');
            card.appendChild(symbol)

            card.dataset.number = "back";
        }

        // Determines which of the above functions to run
        // depending on card number.
        if(number ==="A") makeAce();
        if(number ==="2") makeTwo();
        if(number ==="3") makeThree();
        if(number ==="4") makeFour();
        if(number ==="5") makeFive();
        if(number ==="6") makeSix();
        if(number ==="7") makeSeven();
        if(number ==="8") makeEight();
        if(number ==="9") makeNine();
        if(number ==="10") makeTen();
        if(number ==="J") makeJack();
        if(number ==="Q") makeQueen();
        if(number ==="K") makeKing();
        if(number ==="joker") makeJoker();

        return(card);
    })();

    const back = (() => {
        const card = document.createElement('div');
        card.classList.add('back')
        const symbol = document.createElement('div');
        card.appendChild(symbol)
        card.dataset.number = "back";
        return(card);
    })();


    return {
        front,
        back,

        getNumber,
        getSuit,
    };
}

// Generates a standard deck of 52 cards to a specified target
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
            target.appendChild(newCard.front)
        }
    }
}

// Generates a standard deck of 54 cards to a specified target.
// Same as a 52 card deck, but incldues two jokers
const make54 = (target) => {
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
            target.appendChild(newCard.front)
        }
    }

    const joker1 = Card("joker", "");
    const joker2 = Card("joker", "");
    joker1.make(target);
    joker2.make(target);
}

// Generates 13 cards of a specified suit, to a specified target
const make13 = (suit, target) => {
    const cardSpread = [];
    for (let index = 0; index < Standard.members.length; index++) {
        const cardNumber = Standard.members[index];
        const newCard = Card(cardNumber, suit);
        cardSpread.push(newCard);
        target.appendChild(newCard.front)
    }
    return(cardSpread);
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


// For debugging purposes, everything below
// doesn't need to be exported.

// Debug Interface
const interfaceUI = (function () { 
	// Create container for dubug interface
    const interfaceDiv = document.createElement('div');
    interfaceDiv.classList.add('interface');
    // Create form field for inputs
    const interfaceForm = document.createElement('form');
    interfaceForm.classList.add('interface-form');
    // Prevents page from refreshing when enter is pressed
    function handleForm(event) { event.preventDefault(); }
    interfaceForm.addEventListener('submit', handleForm)
    // Adds form to interface
    interfaceDiv.appendChild(interfaceForm);
    // Creates Label for card size input
    const label = document.createElement('label');
    label.classList.add('card-size-label')
    label.for = 'card-size';
    label.textContent= 'Card Size';


    // Creates input field to change card size
    const cardSizeInput = () => {
        const input = document.createElement('input');
        //Input Logic
        input.classList.add('card-size-input');
        input.name = 'card-size';
        input.type = 'number';
        input.minLength = 1;
        input.maxLength = 3;
        input.min = 20;
        input.max = 150;
        input.placeholder = 'Enter value 20 - 150'
        //Add logic for when enter key is pressed
        input.addEventListener('keydown', (event) => {
            event.preventDefault;
            if (event.code === 'Enter') {
                console.log(input.value);
                const root = document.documentElement;
                root.style.setProperty('--card-size', `${input.value}px`);
            }
        })
        //Adds input field to form
        interfaceForm.appendChild(label);
        interfaceForm.appendChild(input);  
    }
    
    // Adds UI to document body. Add to top of page
    const showUI = () => {
        document.body.appendChild(interfaceDiv);
    }

    cardSizeInput();

    return {
        showUI,
    }
})();

// Debug Commands
interfaceUI.showUI();

const target = document.body;
const diamondFlop = makeFlop(target);
const heartFlop = makeFlop(target);
const clubFlop = makeFlop(target);
const spadeFlop = makeFlop(target);
const extraFlop = makeFlop(target);

const lineBreak = document.createElement('hr');
target.appendChild(lineBreak);
const diamonds = make13(Standard.suit['diamond'], diamondFlop);
const hearts = make13(Standard.suit['heart'], heartFlop);
const clubs = make13(Standard.suit['club'], clubFlop);
const spades = make13(Standard.suit['spade'], spadeFlop);
const joker1 = Card("joker", "");
extraFlop.appendChild(joker1.front);
const joker2 = Card("joker", "");
extraFlop.appendChild(joker2.front);
const cardBack = Card("joker", "");
extraFlop.appendChild(cardBack.back);
console.log(clubs);
extraFlop.appendChild(clubs[6].back);


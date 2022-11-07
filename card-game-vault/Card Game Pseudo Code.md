We are building an engine for playing card games. 

The game will be solitaire.

Things required:
A deck of cards. 
A player hand. (No hand for solitaire )
A discard pile for players. ( not needed )
A playing surface/game area
A draw pile, a discard pile.
Rules for specific game.

Card:
Has to store minimum 2 values:
1. Value
2. Suit
3. For solitaire a red/black value may be very helpful. As suit doesn’t matter but Color does for stacking.
4. Cards may be the spot to have face up or face down as an attribute.
Other values could be images, background of cards, etc.

Card will be an object, most likely use a factory function to create all the cards.



Deck of cards:
A collection of cards. Probably a class because we will most likely want to have methods attached.

The main table deck requires:
Shuffle all remaining cards/all cards.
A draw pile array or cards.
A face up card (3 cards?)
And a discard array of cards.
A method to push array members from draw to face up
Method to push face up to discard
Method to send discard back to draw.
Discard is also sort of the face up possibly use a stack.

The main playing area:
A spot for each Ace (4 spots)… these need to be stacks, unable to remove cards from these
7 playing spots.
Some cards will be face up and face down.
Face down cards will have no rules set to them, face up cards have rules.
Ace spots and playing spots have different rulesets and should be treated differently.

Ace spots:
First card must be ace, increasing in order. Once cards are placed here they cannot be removed.

Playing spots:
Face up cards can only be placed upon cards that are 1 value higher, and of the opposite Color. These should be stacks as well.
Full stacks can be moved to different playing locations, stacks need to be separate logic from playing area.
Stacks are an ordered list with pointers to the next card.




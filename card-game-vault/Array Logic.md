# Array Logic

This is more for the big picture stuff.

## Arrays to make:

### Deck
- This would be whatever is in the box or set. So example, a 52 card deck.
- Either this or Collection would have methods for:
	- Deal random hands to each player
	- Deal set default hands to each player
	- Shuffle deck
	- Split deck
	- Make stacks
		- Move from one stack to another
		- Merge stacks
		- Split stacks
	- Show top card, show bottom card
	- Pick random card
	- Merge all stacks back into main deck again
	- Remove joker (or any specific card)

### Collection
- We might need this originally, but this could be multiple decks in a game. For instance, Dominion uses expansions. So you could have `[Base set, expansion 1, expansion 2]` etc.

### Players
- An array of players, and a factory function to create them.
- Each player would have an array for their hand.

### Hand
- Pickup card from stack
- Add card to another stack
#### Animations
- Not something we need to do right away, more of a second stage thing:
	- Fan hand/ collapse hand
	- Reveal cards
	- Cycle through cards, highlighting one card at a time
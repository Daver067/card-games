# Card Object

## Components
- For now I think we should just do standard 52 card stuff, but the beauty of the idea is that the info and functions contained should be able to swapped pretty easy for any other style of card game.

- Every card should have:
	- A face - This side shows the details of a card, such as its suit, number, etc.
	- A reverse - this side should just be decorative, or a category of some kind.

### Face
- A coloured border
- A suit - Club, heart, spade, diamond
- A number - Ace, 2, 3, 4, 5, 6, 7, 8, 9, J, Q, K, Joker(This might be tricky, maybe a 5th suit as null or wild?)
- A graphic - Maybe we can find some generic vector images for this for placeholders.

### Reverse
- A coloured border
- background colour and/or pattern
- Logo and/or text

## Animations
- We could go really crazy with this, but a few to think of:
	- Flip card (left, up, right, or down)
	- Rotate card 90 or 180, Clockwise or counter clockwise
	- Zoom
	- Move to precise point
	- Move to cell (If there's a grid present)
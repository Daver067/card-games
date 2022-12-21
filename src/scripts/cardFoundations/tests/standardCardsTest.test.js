/**
 * @jest-environment jsdom
 */

import StandardCards from "../standardPackOfCards";

test("standard cards returns an array of 54 cards", () => {
  const cards = StandardCards();
  expect(cards.length).toBe(54);
  expect(cards[0].name).toBe("A of Diamonds");
  expect(cards[cards.length - 1].name).toBe("Joker");
  expect(cards[cards.length - 13].name).toBe("3 of Clubs");
});

/*
test("stock first card is flipped face-up", () => {
  const stock = buildCribbageStock();
  stock.shuffleDeck();
  stock.deck[0].flipCard();

  expect(stock.deck[0].faceUp).toBeTruthy();
});

test("passing a card from one deck to another with no rules works", () => {
  const stock = buildCribbageStock();
  const deck = new Deck();
  stock.passCard(deck, stock.deck[5]);

  expect(deck.deck[0].number).toBe("6");
  expect(deck.deck[0].suit).toBe("♦");

  expect(stock.deck[4].number).toBe("5");
  expect(stock.deck[5].number).toBe("7");
  expect(stock.deck[5].suit).toBe("♦");
});
*/

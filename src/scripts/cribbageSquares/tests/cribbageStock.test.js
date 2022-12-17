/**
 * @jest-environment jsdom
 */

import Deck from "../../DeckClass";
import buildCribbageStock from "../cribbageStock";

test("stock builds a deck and removes jokers", () => {
  const stock = buildCribbageStock();
  expect(stock.deck.length).toEqual(52);
});

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

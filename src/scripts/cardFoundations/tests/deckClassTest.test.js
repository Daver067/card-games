/**
 * @jest-environment jsdom
 */

import makeCard from "../cardBuilder";
import Deck from "../DeckClass";
import { Playing } from "../playing";
import StandardCards from "../standardPackOfCards";

test("deckClass can take an array of cards to make its deck", () => {
  const deck = new Deck(StandardCards());
  expect(deck.cards.length).toBe(54);
});

test("remove card will eliminate a card from the deckBase", () => {
  const eightSpade = makeCard(Playing("8", "♠"));
  const fiveSpade = makeCard(Playing("5", "♠"));
  const deck = new Deck([eightSpade, fiveSpade]);
  deck.removeCard("♠", "8");
  expect(deck.cards.length).toBe(1);
});

test("passCard with no rules will pass the card", () => {
  const eightSpade = makeCard(Playing("8", "♠"));
  const fiveSpade = makeCard(Playing("5", "♠"));
  const deck = new Deck([eightSpade, fiveSpade]);
  const secondDeck = new Deck();
  deck.passCard(secondDeck);
  expect(deck.cards.length).toBe(1);
  expect(secondDeck.cards.length).toBe(1);
});

test("passCard will pass a specific card", () => {
  const deck = new Deck(StandardCards());
  const sixOfDiamonds = deck.cards[5];
  const secondDeck = new Deck();
  deck.passCard(secondDeck, sixOfDiamonds);
  expect(deck.cards.length).toBe(53);
  expect(deck.cards[4].name).toBe("5 of Diamonds");
  expect(deck.cards[5].name).toBe("7 of Diamonds");
  expect(secondDeck.cards[0].name).toBe("6 of Diamonds");
});

test("passCard wont work if the rules return false", () => {
  const deck = new Deck(StandardCards());
  const sixOfDiamonds = deck.cards[5];
  const secondDeck = new Deck();
  deck.passCard(secondDeck, sixOfDiamonds, false);
  expect(deck.cards.length).toBe(54);
  expect(secondDeck.cards.length).toBe(0);
});

test("card index is working correctly", () => {
  const deck = new Deck(StandardCards());
  const sixOfDiamonds = deck.cards[5];
  expect(deck.getCardIndex(sixOfDiamonds)).toBe(5);
});

test("is last card is working correctly", () => {
  const deck = new Deck(StandardCards());
  deck.removeCard("joker", "joker");
  deck.removeCard("joker", "joker");
  const aceOfClubs = deck.cards[39];
  const secondDeck = new Deck();
  for (let i = 0; i <= 12; i++) {
    deck.passCard(secondDeck);
  }
  expect(secondDeck.getCardIndex(aceOfClubs)).toBe(12);
  expect(secondDeck.isLastCard(aceOfClubs)).toBeTruthy();
  expect(secondDeck.isLastCard(secondDeck.cards[0])).toBeFalsy();
});

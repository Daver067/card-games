/**
 * @jest-environment jsdom
 */

import makeCard from "../cardBuilder";
import { Playing } from "../playing";

test("can flip a blank card", () => {
  const blankCard = makeCard();
  expect(blankCard.faceUp).toBeTruthy;
  blankCard.blindFlip();
  expect(blankCard.faceUp).toBeFalsy;
});

test("can make a specific card", () => {
  const aceOfSpades = makeCard(Playing("5", "♠"));
  expect(aceOfSpades.name).toBe("5 of Spades");
});

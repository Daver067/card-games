---

kanban-plugin: basic

---

## To-do

- [ ] Draw Vector Graphics for Joker, King, Queen, and Jack.
- [ ] Add red/black property to cards. Useful for solitaire.
- [ ] Create media queries that simplify card layouts when the card size is below a certain threshold.


## Doing

- [ ] Add animation to `flip-card()` function
- [ ] Add `resize-card(new-size)` function. This permanently resizes a card.


## Bugs to Fix



## Done

- [x] Refactor code to be composition based. Separate `card` from `playing`. This will make creating future card sets far simpler. A `card `should just have features for size, front, back, flip, etc. Where as `playing` should have numbers, suits, etc.
- [x] Separate card logic into its on module, so it can be imported by Dealer.


## Review



## Scrapped Tasks

- [ ] Refactor Code into a class or classic constructor and prototype. This will ensure that all the functions are not getting redeclared every time and wasting memory. ^483zai




%% kanban:settings
```
{"kanban-plugin":"basic","show-checkboxes":true}
```
%%
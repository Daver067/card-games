const SpireCard = (moniker, health) => {
    const name = "Whatever";
    
    return {name, health};
}

const AttackCard = (_strength) => {
    const fistAttack = (enemy) => enemy.hp - _strength;
    const weaponAttack = (enemy, weapon) => enemy.hp - (_strength + weapon);

    return {weaponAttack, fistAttack}
}

const SkillCard = (_mana) => {
    const fireBall = (enemy) => enemy.hp - _mana;

    return {fireBall} // 
}

const GoldCard = (value) => {
    // You could insert additional value here, but you don't have to. It already has a variable named 'value'.
}

const makeAttackCard = (cardName, health, damage) => {
    const card = SpireCard(cardName, health);
    const attack = AttackCard(damage);
    return Object.assign({}, card, attack);
}

const makeSpellCasterCard = (cardName, health, damage) => {
    const card = SpireCard(cardName, health);
    const spell = SkillCard(damage);
    return Object.assign({}, card, spell);
}

// This is where the real value of factory inheritance comes in. 
// What if you want to make a card that can attack or cast a spell?
const makeFistThumpinFireThrowinMayhemCard = (cardName, health, damage, spell_damage) => {
    const card = SpireCard(cardName, health);
    const attack = AttackCard(damage);
    const spell = SkillCard(spell_damage);
    return Object.assign({}, card, attack, spell);
}

const warrior = makeAttackCard("Matthias", 120, 42);
console.log(warrior);

const mage = makeSpellCasterCard("Wendell", 90, 96);
console.log(mage);

const badass = makeFistThumpinFireThrowinMayhemCard("Pogre", 400, 120, 420);
console.log(badass);


// Key points:
// - You have complete control over whats a global variable or not, because everything is private by default.
// - Only things in the return of a function are considered public. 
// - In this case, I've labeled private variables preceded with '_', which is common.
// So you can see how useful this can be. Using inheritance, it would be difficult to make an attack card that can
// also be a gold card, but with factories and composition, it is easy! With cards, you could have each add their own 
// symbols or UI to a card, which would allow for rapid prototypes.


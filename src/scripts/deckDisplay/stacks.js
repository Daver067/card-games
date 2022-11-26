import "./stacks.scss";
import TableDeck from "../tableDeckClass";
import { make54 } from "../deckBuilding";
import { buildStack } from "../tableLayouts";

const Playground = () => {
    const _privateProperty = "How'd you get in here? This is a private area!";
    const publicProperty = "This is public property!"
    const testArray = publicProperty + _privateProperty;

    const publicFunction = function() {
        console.log(testArray);
    };

    const publicFunctionWithThis = function() {
        console.log(this.publicProperty);
    };

    const arrrowFunction = () => { // Throws an Error! Arrow functions kill `this`.
        const quotation = "what the hell?";
        console.log(this);
    };


    
    return {
        publicProperty,
        testArray,

        publicFunction,
        publicFunctionWithThis,
        arrrowFunction,

    }
};

const playground = Playground();
playground.publicFunction();
playground.publicFunctionWithThis();

playground.publicProperty = "And now, because of THIS, the two functions give different results. Without this, it goes with initial value";

playground.publicFunction();
playground.publicFunctionWithThis();
playground.arrrowFunction();


export {Playground};
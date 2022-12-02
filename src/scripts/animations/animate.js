import "./animStyle.scss"

function Animate() {

    // Moves to a specific spot relative to container
    function slideToPoint() {

    };

    // Moves to the location of another object
    function slideToObject() {

    };

    // Slides a relative amount from current position
    function slide(element, vector2, duration) {
        /*
        element: must be a DOM element
        vector2: must be an array of 2 values, ex [300,100]
        duration: number of ms for animation duration
        */
        if(vector2.length !== 2){
            console.error("Error: vector2 must be an array of 2 values, x and y.");
        };

        const keys = {
            transform: `translate(${(vector2[0])}px, ${(vector2[1])}px)`
        };

        const options = {
            duration: duration,
            easing: "ease-out",
            delay: 0,
            direction: "normal",
        }

        function animHandler () {

        };
        
        const anim = element.animate(keys, options);
        anim.finished.then(() => {
            console.log("Animation finished!");
            element.style.transform = `translate(${(vector2[0])}px, ${(vector2[1])}px)`;
        });

        return anim
    };

    return {
        slideToPoint,
        slideToObject,
        slide,
    }
};

export {Animate};
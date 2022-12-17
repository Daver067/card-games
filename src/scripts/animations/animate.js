import "./animStyle.scss"

function Animate() {
    let translate = [];
    let scale = `scale(1)`;
    let rotate = `rotate(0deg)`;
    let transform = `${translate} ${scale} ${rotate}`;


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

        translate = `translate(${(vector2[0])}px, ${(vector2[1])}px)`;
        transform = `${translate} ${scale} ${rotate}`;


        const keys = {
            transform: transform
        };

        const options = {
            duration: duration,
            easing: "ease-out",
            delay: 0,
            direction: "normal",
        }

        const anim = element.animate(keys, options);
        anim.finished.then(() => {
            element.style.transform = transform;
        });

        return anim
    };

    function zoom(element, factor, duration) {
        /*
        element: must be a DOM element
        vector2: must be a float
        duration: number of ms for animation duration
        */

        scale = `scale(${factor})`;
        transform = `${translate} ${scale} ${rotate}`;


        const keys = {
            transform: transform
        };

        const options = {
            duration: duration,
            easing: "ease-out",
            delay: 0,
            direction: "normal",
        }

        const anim = element.animate(keys, options);
        anim.finished.then(() => {
            element.style.transform = transform;
        });

        return anim
    };

    function spin(element, degrees, duration) {
        /*
        element: must be a DOM element
        degrees: amount to rotate in degrees
        duration: number of ms for animation duration
        */

        rotate = `rotate(${degrees}deg)`;
        transform = `${translate} ${scale} ${rotate}`;

        const keys = {
            transform: transform
        };

        const options = {
            duration: duration,
            easing: "linear",
            delay: 0,
            direction: "normal",
        }

        const anim = element.animate(keys, options);
        anim.finished.then(() => {
            element.style.transform = transform;
        });

        return anim
    };


    return {
        translate,
        zoom,
        spin,
        slide,
    }
};

export {Animate};
(function () {
    "use strict";
    var // Constants
        PI = 3.14159265359,

        // Variables
        simpleArray = [],
        simpleObject = {},

        // Functions
        simpleArrayFunction,
        simpleObjectFunction,
        functionSelection;

    simpleArrayFunction = function () {
        simpleArray = [];
    };

    simpleObjectFunction = function () {
        simpleObject = {};
    };

    functionSelection = function (optionIndex) {
        alert(optionIndex);
    };

}());

// 1
const multiplesOfSixAndNine = () => {
    for (i = 1; i <= 100; i++) {
        if (i % 6 === 0 && i % 9 === 0) {
            console.log(i);
        };
    };
    return;
};
multiplesOfSixAndNine();

// 2 not finished
let greaterNum = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        if (a === b) {
            return "both integers are equal";
        } else if (a > b) {
            return a;
        };
    };

    if (typeof a === "float" && typeof b === "float") {
        if (a === b) {
            return "both integers are equal";
        } else if (a > b) {
            return a;
        } else {
            return null;
        };
    };

    if (typeof a === "string" && typeof b === "string") {
        if (a === b) {
            return null;
        };
    };

    if (typeof a === "string" && typeof b === "number") {
        if (a !== b) {
            return null;
        };
    };
};
greaterNum(10, 7); //returns 10
greaterNum(1.14, 1.14); //returns "both integers are equal"
greaterNum("21", 21); //returns null
greaterNum("21", "21"); //returns null

// 3
const sumOfFourAndSix = () => {
    let sum = 0;
    for (i = 1; i <= 1000; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            sum += i;
        };
    };
    return sum;
};
sumOfFourAndSix(); //returns 41832

// 4 
const oddAndEvenToN = (num) => {
    for (i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        };
    };
    return;
};
oddAndEvenToN(5);
    // will console.log:
    // "0 is even"
    // "1 is odd"
    // "2 is even"
    // "3 is odd"
    // "4 is even"
    // "5 is odd"

// 5 
const sumOfNotDivisibleByTen = () => {
    let sum = 0;
    for (i = 1; i <= 1000; i++) {
        if (i % 10 !== 0) {
            sum += i;
        };
    };
    return sum;
};
console.log(sumOfNotDivisibleByTen()); //returns 450000

// 6 not finished
const greaterNumb = (a, b, c, d) => {
    // const integer = (value) => {
    //     return typeof value === "number" || typeof value === "float";
    // };

    // if (typeof a === "float" && typeof b === "float" && typeof c === "float" && typeof d === "float") {
    //     //if (typeof a === integer && typeof b === integer && typeof c === integer && typeof d === integer) {
    //         if (a === b && a === c && a === d) {
    //             return "all integers are equal";
    //         } else if (b === c && b === d) {
    //             return "three integers are equal";
    //         } else if (c === d) {
    //             return "two integers are equal";
    //         } else if (a > b && a > c && a > d) {
    //             return a;
    //         } else if (b > c && b > d) {
    //             return b;
    //         } else if (c > d) {
    //             return c;
    //         } else {
    //             return d;
    //         };
    //     };

    if (typeof a === "float" && typeof b === "float" && typeof c === "float" && typeof d === "float") {
        if (a === b && a === c && a === d) {
            return "four integers are equal";
        } else if (b === c && b === d) {
            return "three integers are equal";
        } else if (c === d) {
            return "two integers are equal";
        } 
    };

    // if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number") {
    // //if (typeof a === integer && typeof b === integer && typeof c === integer && typeof d === integer) {
    //     if (a === b && a === c && a === d) {
    //         return "all integers are equal";
    //     } else if (b === c && b === d) {
    //         return "three integers are equal";
    //     } else if (c === d) {
    //         return "two integers are equal";
    //     }; 
    // };

    if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number") {
    // if (typeof a === integer && typeof b === integer && typeof c === integer && typeof d === integer) {
        if (a > b && a > c && a > d) {
            return a;
        } else if (b > c && b > d) {
            return b;
        } else if (c > d) {
            return c;
        } else {
            return d;
        };
    };



    // if (typeof a === "float" && typeof b === "float" && typeof c === "float" && typeof d === "float") {
    //     if (a > b && a > c && a > d) {
    //         return a;
    //     } else if (b > c && b > d) {
    //         return b;
    //     } else if (c > d) {
    //         return c;
    //     } else {
    //         return d;
    //     };
    // };

    if (typeof a === "string" && typeof b === "string") {
        if (a === b || a === c || a === d) {
            return null;
        } else if (b === c || b === d) {
            return null;
        } else {
            return null;
        } 
    };

    if (typeof a === "string" && typeof b === "number") {
        if (a !== b || a !== c || a !== d) {
            return null;
        } else if (b !== c || b !== d) {
            return null;
        } else {
            return null;
        } 
    };
};
console.log(greaterNumb(10, 7, 16, 80)); //returns 80
console.log(greaterNumb(1.14, 1.14, 5, 7)); //returns "two integers are equal"
console.log(greaterNumb(1.14, 1.14, 1.14, 7)); //returns "three integers are equal"
console.log(greaterNumb("21", 21, 60, 3)); //returns null

// 7 (Bonus) 
const multiplesOfFourAndSix = () => {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            arr.push(i);
        };
    };
    return arr;
};
multiplesOfFourAndSix(); // returns [12, 24, 36, 48,60, 72, 84, 96]

// 8 (Bonus) 
const countMultiplesOfTwo = () => {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
};
countMultiplesOfTwo();
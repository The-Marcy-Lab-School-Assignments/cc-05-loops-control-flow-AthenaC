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
const greaterNum = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        if (Number(a) > Number(b)) {
            return a;
        } else if (Number(a) === Number(b)) {
            return "both integers are equal";
        } else {
            return null;
        };
    };
};
console.log(greaterNum(10, 7)); //returns 10
console.log(greaterNum(1.14, 1.14)); //returns "both integers are equal"
console.log(greaterNum("21", 21)); //returns null
console.log(greaterNum("21", "21")); //returns null

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

// 6
// const greaterNum = (a, b, c, d) => {

// }
// greaterNum(10, 7, 16, 80) //returns 80
// greaterNum(1.14, 1.14, 5, 7) //returns "two integers are equal"
// greaterNum(1.14, 1.14, 1.14, 7) //returns "three integers are equal"
// greaterNum("21", 21, 60, 3) //returns null

// 7 (Bonus)


// 8 (Bonus)

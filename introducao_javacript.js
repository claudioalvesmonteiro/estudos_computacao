

//// INTRODUCTION

// String.length

let message = 'good nite';
console.log(message.length);
// Prints: 9

console.log('howdy'.length);
// Prints: 5

// Math is the library
Math.random();

// Arithmetic Operators 

// Addition
5 + 5
// Subtraction
10 - 5
// Multiplication
5 * 10
// Division
10 / 5
// Modulo
10 % 5

// Numbers
let amount = 6;
let price = 4.99;

//// VARIABLES

var favoriteFood = 'pizza';

var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

//can change
let changeMe = true;
changeMe = false;
console.log(changeMe);

// cannot change
const entree = 'Enchiladas';
console.log(entree);

//// MATH ASSIGNMENT OPERATORS

let w = 4;
w += 1; // Can be written as x = x + 1
console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

//// The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;

//// String Concatenation with Variables
var favoriteAnimal = 'carcara';
console.log('My favorite animal: '+favoriteAnimal)

//// String Interpolation
var myName = 'craudi';
var myCity = 'Recife';

console.log(`My name is ${myName}. My favorite city is ${myCity}`)

//// typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];
truths.push(true);

// classes
class Car {}
let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) function that returns the 'any' type
const json = '{ "x:" 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

// 2) when we declare a variable on one line
//    and initialise it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let word in words) {
  if (word == 'green') {
    foundWord = true;
  }
}

// 3) variable who's type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbersAboveZero: (number | boolean)[];

numbers.forEach(number => {
  number > 0 ? numbersAboveZero.push(number) : numbersAboveZero.push(false);
});

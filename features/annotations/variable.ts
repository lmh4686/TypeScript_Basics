//Below example doesn't require to specify the type
let apples = 5;
let speed: string = "fast";
let hasNameL: boolean = true;
let nothing: null = null;
let notMuch: undefined = undefined;
let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
// class Car {}
// let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When have to use annotations
// 1) Function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line
// and initialize it later
let words = ["a", "b", "c"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'b') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
export {};

// EXAMPLE 1 - Return Multiple values from a Function in TypeScript

function getValues() {
  const str = 'bobbyhadz.com';
  const num = 100;

  return [str, num] as const;
}

// 👇️ const result: readonly ["bobbyhadz.com", 100]
const result = getValues();

const [str, num] = getValues();

console.log(str.toUpperCase()); // 👉️ "BOBBYHADZ.COM"
console.log(num.toFixed(2)); // 100.00

// ---------------------------------------------------

// // EXAMPLE 2 - Using a tuple return type instead

// function getValues(): [string, number] {
//   const str = 'bobbyhadz.com';
//   const num = 100;

//   return [str, num];
// }

// // 👇️ const result: [string, number]
// const result = getValues();

// const [str, num] = getValues();

// ---------------------------------------------------

// // EXAMPLE 3 - Define a Function with multiple return Types in TypeScript

// function getValue(num: number): string | number {
//   if (num > 5) {
//     return 100;
//   }

//   return 'bobbyhadz.com';
// }

// // 👇️ const result1: string | number
// const result = getValue(4);

// if (typeof result === 'string') {
//   // 👇️ result is a string here
//   console.log(result.toUpperCase());
// } else {
//   // 👇️ result is a number here
//   console.log(result.toFixed(2));
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Using arrow functions

// const getValue = (num: number): string | number => {
//   if (num > 5) {
//     return 100;
//   }

//   return 'bobbyhadz.com';
// };

// ---------------------------------------------------

// // EXAMPLE 5 - Using classes, type aliases or interfaces

// class Animal {
//   run() {
//     console.log('the animal runs');
//   }
// }

// class Human {
//   walk() {
//     console.log('the human walks');
//   }
// }

// function getValue(num: number): Animal | Human {
//   if (num > 5) {
//     const animal = new Animal();
//     return animal;
//   }

//   const human = new Human();
//   return human;
// }

// ---------------------------------------------------

// // EXAMPLE 6 - Use a type guard before accessing properties

// function getValue(num: number): string | number {
//   if (num > 5) {
//     return 100;
//   }

//   return 'bobbyhadz.com';
// }

// // 👇️ const result1: string | number
// const result = getValue(4);

// if (typeof result === 'string') {
//   // 👇️ result is a string here
//   console.log(result.toUpperCase());
// } else {
//   // 👇️ result is a number here
//   console.log(result.toFixed(2));
// }

// ---------------------------------------------------

// // EXAMPLE 7 - Using a type assertion

// function getValue(num: number): string | number {
//   if (num > 5) {
//     return 100;
//   }

//   return 'bobbyhadz.com';
// }

// // 👇️ const result1: string
// const result = getValue(4) as string; // 👈️ type assertion

// console.log(result.toUpperCase()); // 👉️ "bobbyhadz.com"

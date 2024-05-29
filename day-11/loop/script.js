console.log("javascript loaded");

// LOOP INTRUCTIONS IN JAVASCRIPT

// Loop is a programming concept that repeats a sequence of instructions until a specific condition is met
// must have a starting point, a condition, and an increment or decrement
// iteration is the process of repeating a sequence of instructions

// 1. FOR LOOP
// for(starting point; condition; increment/decrement){}
// for (let i = 0; i < 3; i = i + 1) {
//   console.log(i);
// }

// get even number from 0 to 100
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// fizzbuzz
// if the number is divisible by 3, console log fizz
// if the number is divisible by 5, console log buzz
// if the number is divisible by 3 and 5, console log fizzbuzz
// else console log the number
// example: 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
for (let i = 0; i < 100; i++) {
  // write your code here
}

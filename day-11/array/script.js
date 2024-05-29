console.log("javascript loaded");

// 1. ARRAY INTRODUCTIONS IN JAVASCRIPT

// nazim go supermarket and buy some fruits
// nazim took a basket and put some fruits in it
// inside the basket, nazim can put apple, banana, orange, mango, grape

// array is a data structure that can store multiple values
// array represents by square brackets []

const emptyBasket = []; // empty basket or empty array

// we can fill the array with some ELEMENTS

// each element is separated by comma
// the elements can be any data type

// array with 5 string elements
const stringElements = ["apple", "banana", "orange", "mango", "grape"];

// array with 5 number elements
const numberElements = [10, 20, 30, 40, 50];

// array with 5 boolean elements
const booleanElements = [true, false, true, false, true];

// array with 5 mixed elements
const mixedElements = ["apple", 20, true, "mango", false];

const nazimBasket = [
  "apple",
  "banana",
  "orange",
  "mango",
  "grape",
  "orange",
  "watermelon",
];
console.log(nazimBasket);

// 2. ARRAY INDEX
// array index starts from 0
// to access the first element in the array
// to determine the value of the element in the array by its index
console.log(nazimBasket[0]);
console.log(nazimBasket[1]);
console.log(nazimBasket[2]);
console.log(nazimBasket[3]);
console.log(nazimBasket[4]);
console.log(nazimBasket[5]);

// 3. ARRAY LENGTH
// in array we have a property called length
// length property returns the number of elements in the array
console.log(nazimBasket.length);

// 4. ARRAY METHODS
// what is method?
// method is a function that belongs to an object (array is an object)

// 4.1. PUSH METHOD (MUTATING METHOD)
console.log(nazimBasket);
// add kiwi to the end of the array
nazimBasket.push("kiwi");
console.log(nazimBasket);

// 4.2. POP METHOD (MUTATING METHOD)
// remove the last element in the array
nazimBasket.pop();
nazimBasket.pop();
console.log(nazimBasket);

// 4.3. UNSHIFT METHOD (MUTATING METHOD)
// add lemon to the beginning of the array
nazimBasket.unshift("lemon");
console.log(nazimBasket);

// 4.4. SHIFT METHOD (MUTATING METHOD)
// remove the first element in the array
nazimBasket.shift();
console.log(nazimBasket);

// 4.5. SPLICE METHOD (MUTATING METHOD)
// remove the element by its index
// splice method takes 2 arguments
// first argument is the index of the element to be removed
// second argument is the number of elements to be removed
nazimBasket.splice(2, 1);
console.log(nazimBasket);

// 4.6. SLICE METHOD (NON-MUTATING METHOD)
// slice method takes 2 arguments
// first argument is the starting index
// second argument is the ending index (exclusive)
// slice method returns a new array
const newBasket = nazimBasket.slice(1, 3);
console.log(nazimBasket);
console.log(newBasket);

// 4.7. CONCAT METHOD (NON-MUTATING METHOD)
// concat method takes 1 or more arrays as arguments
// concat method returns a new array
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "cabbage", "spinach"];
const food = fruits.concat(vegetables);
console.log(fruits);
console.log(vegetables);
console.log(food);

// 4.8. SORT METHOD (MUTATING METHOD)
// sort method sorts the elements in the array
// sort alphabetically
console.log(food.sort());
// sort numerically
// sort by using 16 unicode code points
// sort method is not suitable for sorting numbers
// modify the function callback to sort numbers
const numbers = [10, 5, 20, 30, 15, 1000];
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

const math = require("./math.js");
const animals = require("./animal.js");
const elements = require("./element.js");
console.log(math);
console.log(animals);
console.log(elements);

const birthYear = 1994;
const firstName = "John";
const lastName = "Doe";

const age = new Date().getFullYear() - birthYear;

console.log(
  `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`
);

console.log(math.pi, math.goldenRatio, math.eulersNumber);
console.log(animals.wildlifeAnimals, animals.farmAnimals, animals.pets);
console.log(elements.alkaliMetals, elements.nobleGases, elements.halogens);

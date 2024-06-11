const crypto = require("node:crypto");

const randomInt = crypto.randomInt(10000);
const randomBytes = crypto.randomBytes(8);
const name = "zahin";
const secretNameCombination = name + "-" + randomBytes.toString("hex");

console.log("RANDOM INT:", randomInt);
console.log("RANDOM BYTES:", randomBytes.toString("hex"));
console.log("SECRET NAME COMBINATION:", secretNameCombination);

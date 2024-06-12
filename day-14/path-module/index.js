// global variable nodejs
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

// this type of path will cause error in windows
// because of the backslash
// const path = "C:\Users\user\Documents\file.txt";
const htmlPath = "./output/index.html";

// Path module
const path = require("path");
const pathResolved = path.resolve(htmlPath);

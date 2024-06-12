const http = require("node:http");
const fs = require("node:fs");

// function declaration
// function add(a, b) {
//   return a + b;
// }

// function expression or arrow function
// const add = (a, b) => {
//   return a + b;
// };

const indexHtml = fs.readFileSync("./index.html", "utf-8");
// Create a local server to receive data from
const server = http.createServer(function (req, res) {
  const url = req.url;
  console.log(url);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(indexHtml);
  res.end();
});

// listen server on port 8888
const PORT = 8888;
server.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

// Exercise:
// host your html resume using node.js
// 1. home -> index.html = /
// 2. about -> about.html = /about
// 3. contact -> contact.html = /contact
// 4. 404 page = 404.html

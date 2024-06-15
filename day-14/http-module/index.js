const http = require("node:http");
const fs = require("node:fs");

const indexHtml = fs.readFileSync("./index.html", "utf-8");
const aboutHtml = fs.readFileSync("./about.html", "utf-8");
const contactHtml = fs.readFileSync("./contact.html", "utf-8");
const notFoundHtml = fs.readFileSync("./404.html", "utf-8");
// Create a local server to receive data from
const server = http.createServer(function (req, res) {
  // handle a multiple routes in node.js HTTP server
  const url = req.url;
  console.log("URL", url);
  if (url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "X-Custom-Secret": "Hello, this is password for you",
    });
    res.write(indexHtml);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(aboutHtml);
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(contactHtml);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(notFoundHtml);
    res.end();
  }
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

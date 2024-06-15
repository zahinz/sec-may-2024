const express = require("express");
const path = require("path");

const app = express();
const PORT = 8888;

// middleware
app.use(express.static("public"));

// routes
// http methods - GET, POST, PUT, DELETE
app.get("/", function (req, res) {
  // set header to html
  const homePath = path.join(__dirname, "views", "index.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(homePath);
});

app.get("/about", function (req, res) {
  const aboutPath = path.join(__dirname, "views", "about.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(aboutPath);
});

app.get("/contact", function (req, res) {
  const contactPath = path.join(__dirname, "views", "contact.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(contactPath);
});

// not found
// MUST BE THE LAST ROUTE
app.get("*", function (req, res) {
  const notFoundPath = path.join(__dirname, "views", "404.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(notFoundPath);
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

// final portfolio presentation
// 1. create a new project node js express
// 2. create a new folder views - index.html, about.html, contact.html, 404.html
// 3. create a new folder public - css, js, images
// 4. setup a node js express server to serve the portfolio with routes

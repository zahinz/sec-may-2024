import express from "express";
import helloWorld from "./controller/hello-world.js";
import helloUser from "./controller/hello-user.js";
import helloUserAge from "./controller/hello-user-age.js";
import helloAdmin from "./controller/hello-admin.js";

const app = express();
const PORT = 8080;

// function expression
app.get("/", helloWorld);
// params starts with colon (:)
// params is a dynamic value that can be accessed in the request object
app.get("/hello/admin", helloAdmin);
app.get("/hello/:name", helloUser);
app.get("/hello/:name/:dob", helloUserAge);

app.listen(PORT, function () {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

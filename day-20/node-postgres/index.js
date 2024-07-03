import express from "express";
import healthController from "./controllers/health.js";
import db from "./database/init.js";
import createUserTable from "./models/user.js";
import createTodoTable from "./models/todo.js";
import registerUser from "./controllers/user/register.js";
import listAllUsers from "./controllers/user/listAll.js";
import deleteUserById from "./controllers/user/deleteUserById.js";
import updateUserById from "./controllers/user/updateUserById.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection and create table
db().then(() => {
  createUserTable();
  createTodoTable();
});

app.get("/health", healthController.getHealth);
app.post("/health", healthController.postHealth);

// routes
app.post("/register", registerUser);
app.get("/users", listAllUsers);
app.delete("/users/:id", deleteUserById);
app.put("/users/:id", updateUserById);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

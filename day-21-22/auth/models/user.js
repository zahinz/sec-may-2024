import database from "../database/connection.js";

const createNewUserSQL = `
CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username varchar(255) UNIQUE,
    email varchar(255) UNIQUE,
    password varchar(255),
    created_at timestamp DEFAULT NOW()
);
`;
async function createUsersTable() {
  try {
    await database.query(createNewUserSQL);
    console.log("Users table created");
  } catch (error) {
    return console.log("Error creating users table", error);
  }
}

export default createUsersTable;

import pool from "../database/connection.js";

const query = `
CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username varchar(255) UNIQUE,
    email varchar(255) UNIQUE,
    password varchar(255),
    created_at timestamp DEFAULT NOW()
);
`;

async function createUserTable() {
  try {
    await pool.query(query);
    console.log("User table created successfully");
  } catch (error) {
    console.log(error);
    console.log("Failed to create user table");
  }
}

export default createUserTable;

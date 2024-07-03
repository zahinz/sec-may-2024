import pool from "../database/connection.js";

const query = `
CREATE TABLE IF NOT EXISTS todos (
    id serial PRIMARY KEY,
    name varchar(255),
    is_completed boolean DEFAULT false,
    created_by integer REFERENCES users(id),
    created_at timestamp DEFAULT NOW()
);
`;

async function createTodoTable() {
  try {
    await pool.query(query);
    console.log("Todo table created successfully");
  } catch (error) {
    console.log(error);
    console.log("Failed to create todo table");
  }
}

export default createTodoTable;

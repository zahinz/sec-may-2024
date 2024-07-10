import database from "../database/index.js";

const queryCreateFileTable = `
CREATE TABLE IF NOT EXISTS files (
    id SERIAL PRIMARY KEY,
    fieldname VARCHAR(255) NOT NULL,
    originalname VARCHAR(255) NOT NULL,
    encoding VARCHAR(255) NOT NULL,
    mimetype VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    filename VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    size INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

async function createFileTable() {
  try {
    await database.query(queryCreateFileTable);
    console.log("File table created successfully");
  } catch (error) {
    console.log(error);
    console.log("Failed to create file table");
  }
}

export default createFileTable;

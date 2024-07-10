import pg from "pg";
import dotenv from "dotenv";
import createFileTable from "../models/file.js";
dotenv.config();

const { Client } = pg;

const database = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

async function initDd() {
  try {
    database.connect();
    const now = await database.query(`SELECT NOW()`);
    const dbName = await database.query(`SELECT current_database()`);
    const timeNow = now.rows[0].now;
    const databaseName = dbName.rows[0].current_database;

    //   create tables
    await createFileTable();
    console.log(`Connected to ${databaseName} at ${timeNow}`);
  } catch (error) {
    console.log(error);
    console.log("Failed to connect to the database");
  }
}

initDd();

export default database;

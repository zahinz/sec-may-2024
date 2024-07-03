import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "zahin",
  password: "",
  database: "node-pg-todo",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  //   ssl: true, // enable this for production
});

export default pool;

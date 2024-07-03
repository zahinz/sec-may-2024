import pool from "../../database/connection.js";

const query = `
SELECT id, username, email FROM users;
`;

async function listAllUsers(req, res) {
  try {
    const resDb = await pool.query(query);
    const usersDb = resDb.rows;
    const message =
      usersDb.length === 0 ? "No users found" : `${usersDb.length} users found`;
    const data = {
      message,
      data: usersDb,
    };

    return res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

export default listAllUsers;

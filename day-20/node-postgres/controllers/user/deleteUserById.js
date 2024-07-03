import pool from "../../database/connection.js";

const query = `
DELETE FROM users
WHERE id = $1;
`;

async function deleteUserById(req, res) {
  try {
    const userId = req.params.id;
    const resDb = await pool.query(query, [userId]);
    //   check row count to see if user was deleted
    //   if row count is 0, then no user was found
    //   when user not found, return 404 status code
    if (resDb.rowCount === 0) {
      const data = {
        message: `No user found with id ${userId}`,
      };
      return res.status(404).json(data);
    }
    const data = {
      message: `delete user with id ${userId}`,
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

export default deleteUserById;

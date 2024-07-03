import pool from "../../database/connection.js";

const checkUserExistQuery = `
SELECT * FROM users
WHERE id = $1;
`;

const getUserDataQuery = `
SELECT * FROM users
WHERE id = $1;
`;

const updateUserQuery = `
UPDATE users
SET username = $1, email = $2, password = $3
WHERE id = $4;
`;

async function updateUserById(req, res) {
  try {
    const { id } = req.params;

    // check if user with id exist in the database
    const checkUserExistDb = await pool.query(checkUserExistQuery, [id]);
    // if user not found, return 404 status code
    if (checkUserExistDb.rowCount === 0) {
      const data = {
        message: `No user found with id ${id}`,
      };
      return res.status(404).json(data);
    }

    // get existing user data
    const getUserDataDb = await pool.query(getUserDataQuery, [id]);
    const existingUserData = getUserDataDb.rows[0];
    const existingUsername = existingUserData.username;
    const existingEmail = existingUserData.email;
    const existingPassword = existingUserData.password;

    //   get user data from request body
    //   if data not exist, use existing data from database
    const username = req.body.username || existingUsername;
    const email = req.body.email || existingEmail;
    const password = req.body.password || existingPassword;

    // if found, update user with id
    await pool.query(updateUserQuery, [username, email, password, id]);

    const data = {
      message: `update user with id ${id}`,
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

export default updateUserById;

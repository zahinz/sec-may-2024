import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import database from "../database/connection.js";
dotenv.config();

async function isAuth(req, res, next) {
  const headers = req.headers;
  const token = headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    const producedAt = new Date(decoded.iat * 1000);
    console.log("Token produced at: ", producedAt);

    // if token more than 1 hour old, reject
    const now = new Date();
    const diff = now - producedAt;
    const diffInHours = diff / 1000 / 60 / 60;

    // calculate the expiration time by using diffInHours
    //   const expirationTime = producedAt.setHours(producedAt.getHours() + 1);

    if (diffInHours > 1) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // check if user is valid in the database
    const query = `
      SELECT * FROM users WHERE id = $1 AND email = $2 AND username = $3
      `;
    const resDb = await database.query(query, [
      decoded.id,
      decoded.email,
      decoded.username,
    ]);

    if (resDb.rows.length === 0) {
      // error message must be very generic to avoid leaking information
      return res.status(401).json({ message: "Unauthorized" });
    }
    // IMPORTANT: reassign req.user to the decoded token
    req.user = {
      id: decoded.id,
      email: decoded.email,
      username: decoded.username,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

export default isAuth;

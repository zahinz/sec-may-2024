import database from "../../database/connection.js";

const query = `
INSERT INTO todos (name, created_by)
VALUES ($1, $2)
RETURNING id, name, is_completed, created_by, created_at;
`;

async function createTodo(req, res) {
  try {
    const name = req.body.name;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    //   req.user comes from the middleware isAuth
    const createdBy = req.user.id;
    const values = [name, createdBy];

    const dbRes = await database.query(query, values);
    const todo = dbRes.rows[0];
    const data = {
      message: "Todo created successfully",
      data: todo,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default createTodo;

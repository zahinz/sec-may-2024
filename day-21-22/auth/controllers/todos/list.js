import database from "../../database/connection.js";

const query = `
SELECT id, name, is_completed, created_at FROM todos
WHERE created_by = $1;
`;

async function listTodos(req, res) {
  try {
    const createdBy = req.user.id;
    const dbRes = await database.query(query, [createdBy]);
    const todos = dbRes.rows;
    const data = {
      message: "Todo listed successfully",
      data: todos,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default listTodos;

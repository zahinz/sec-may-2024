import database from "../../database/connection.js";

const query = `
SELECT * FROM todos WHERE id = $1 AND created_by = $2;
`;

async function viewTodo(req, res) {
  try {
    const todoId = req.params.id;
    const userId = req.user.id;
    const dbRes = await database.query(query, [todoId, userId]);
    const todo = dbRes.rows[0];

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    const data = {
      message: `Todo viewed id ${todoId} successfully`,
      data: todo,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default viewTodo;

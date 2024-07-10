import database from "../../database/connection.js";

const getTodoQuery = `
SELECT * FROM todos WHERE id = $1 AND created_by = $2;
`;

const updateQuery = `
UPDATE todos
SET name = $1, is_completed = $2
WHERE id = $3 AND created_by = $4
`;

async function updateTodo(req, res) {
  try {
    //   update field from body
    const name = req.body.name;
    const isCompleted = req.body.is_completed;
    const todoId = req.params.id;
    const userId = req.user.id;

    // get default todo from db
    const getTodoDb = await database.query(getTodoQuery, [todoId, userId]);
    const defaultTodo = getTodoDb.rows[0];

    if (!defaultTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    // update todo
    const values = [
      name || defaultTodo.name,
      isCompleted || defaultTodo.is_completed,
      todoId,
      userId,
    ];
    const dbRes = await database.query(updateQuery, values);

    if (dbRes.rowCount === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const data = {
      message: `Todo updated id ${todoId} successfully`,
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default updateTodo;

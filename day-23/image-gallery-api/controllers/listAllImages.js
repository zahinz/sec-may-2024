import database from "../database/index.js";

const listAllImageQuery = `
SELECT * FROM files
`;

async function listAllImages(req, res) {
  try {
    const { rows } = await database.query(listAllImageQuery);

    // map and parse to display only originalname, path with the full url, size, created_at
    const newRows = rows.map((row) => {
      const url = `${process.env.APP_BASE_URL}/uploads/${row.filename}`;
      const data = {
        name: row.originalname,
        url: url,
        size: row.size,
        created_at: row.created_at,
      };
      return data;
    });
    return res.status(200).json({ status: "success", data: newRows });
  } catch (error) {
    return res.status(400).json({ status: "error", error: error.message });
  }
}

export default listAllImages;

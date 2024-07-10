import database from "../database/index.js";

const insertQuery = `
INSERT INTO files (fieldname, originalname, encoding, mimetype, destination, filename, path, size)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING id, filename, path, size, created_at;
`;

async function uploadImage(req, res) {
  try {
    // req.file came from the multer middleware
    const file = req.file;

    // Check if file is present
    if (!file) {
      return res.status(400).json({ error: "Please upload a file" });
    }

    // insert the file details into the database
    const fieldname = file.fieldname;
    const originalname = file.originalname;
    const encoding = file.encoding;
    const mimetype = file.mimetype;
    const destination = file.destination;
    const filename = file.filename;
    const path = file.path;
    const size = file.size;

    const values = [
      fieldname,
      originalname,
      encoding,
      mimetype,
      destination,
      filename,
      path,
      size,
    ];

    const dbRes = await database.query(insertQuery, values);
    const dbData = dbRes.rows[0];

    const data = {
      message: "Image uploaded successfully",
      data: dbData,
    };
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default uploadImage;

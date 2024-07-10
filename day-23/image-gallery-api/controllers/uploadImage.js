import database from "../database/index.js";
import email from "../services/email.js";
import fs from "fs";
import path from "path";

const insertQuery = `
INSERT INTO files (fieldname, originalname, encoding, mimetype, destination, filename, path, size)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING id, filename, path, size, created_at;
`;

async function uploadImage(req, res) {
  const htmlPath = path.join(
    process.cwd(),
    "services",
    "emailTemplate",
    "notifyNewUpload.html"
  );

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

    // send email to notify admin of new image upload

    const htmlFile = fs.readFileSync(htmlPath, "utf8");
    await email
      .sendMail({
        from: "notification@image-galley.io",
        to: "admin@image-galley.io",
        subject: "New Image Uploaded",
        text: `A new image was uploaded with the following details: ${JSON.stringify(
          dbData
        )}`,
        html: htmlFile
          .replace("[[ID]]", dbData.id)
          .replace("[[FILENAME]]", dbData.filename)
          .replace("[[PATH]]", dbData.path)
          .replace("[[SIZE]]", dbData.size)
          .replace("[[CREATED_AT]]", dbData.created_at),
      })
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });

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

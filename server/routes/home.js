import db from "../database/connection.js";

export default async function home(request, response) {
  db.query("SELECT * FROM blogpost ORDER BY id DESC", (error, results) => {
    if (error) {
      response.status(500).json({ error: error.message });
    } else {
      const posts = results.rows;
      response.send(posts);
    }
  });
}

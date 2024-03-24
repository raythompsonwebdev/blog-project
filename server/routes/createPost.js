import db from "../database/connection.js";

async function createPost(request, response) {
  const { author, username, blogtitle, blogpost, mood, submitted } =
    request.body;

  db.query(
    "INSERT INTO blogpost(author, name, blogtitle, blogpost, mood , date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [author, username, blogtitle, blogpost, mood, submitted],
    (error, results) => {
      if (error) {
        response.status(500).json({ error: error.message });
      }
      response.status(201).send(`Blog added ID: ${results.rows[0].id}`);
    }
  );

  response.redirect("/posts");
}

export default createPost;

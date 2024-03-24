import db from "../database/connection.js";

async function updatePost(request, response) {
  const id = parseInt(request.params.id);
  const { name, blogtitle, blogpost, mood, submitted } = request.body;
  db.query(
    ` 
      UPDATE blogpost 
      SET name = $2, 
      SET blogtitle = $3, 
      SET blogpost = $4, 
      SET mood = $5, 
      SET date = $6
      WHERE id = $1
    `,
    [id, name, blogtitle, blogpost, mood, submitted],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Blog updated ID: ${id}`);
    }
  );

  response.redirect("/posts");
}

export default updatePost;

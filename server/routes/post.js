import db from "../database/connection.js";

async function post(request, response) {
  try {
    // convert string to number
    const id = parseInt(request.params.id);

    db.query("SELECT * FROM blogpost WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      const postItem = results.rows[0];
      response.send(postItem);
    });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
}

export default post;

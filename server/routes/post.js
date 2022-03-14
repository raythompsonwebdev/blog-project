
import db  from "../database/connection.js";

export default function get(request, response) {
  try {
    // convert string to number
    const id = parseInt(request.params.id);

    db.query("SELECT * FROM blogpost WHERE id = $1", [id]).then((result) => {
      
      const postItem = result.rows[0];

      // response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      // response.setHeader("Vary", "Origin");
     
      response.send(postItem);
    });
  } catch (err) {
    response.status(500).json({error: err.message});
  }
}

//module.exports = { get };

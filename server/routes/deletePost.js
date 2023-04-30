import db  from "../database/connection.js";

export default function post(request, response) {
  const id = parseInt(request.params.id);
  db.query("DELETE FROM blogpost WHERE id = $1", [id], (err, res) => {
    if (err) {
      console.log(err);
    }
    res;
  });

  response.redirect("http://localhost:3000");
}


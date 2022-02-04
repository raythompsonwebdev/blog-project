const db = require("../database/connection.js");

function post(request, response) {
  const id = parseInt(request.params.id);
  const f = db.query("DELETE FROM blogpost WHERE id = $1", [id], (err, res) => {
    if (err) {
      console.log(err);
    }
    res;
  });

  response.redirect("/posts");
}

module.exports = { post };

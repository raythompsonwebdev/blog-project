const db = require("../database/connection.js");

function post(request, response) {
  const id = parseInt(request.params.id);
  db.query("DELETE FROM blogpost WHERE id = $1", [id]).then(() => {
    response.redirect("/");
  });

  //const postItem = todo;
  //response.redirect("/");
  //response.status(200).json(todo);
}

module.exports = { post };

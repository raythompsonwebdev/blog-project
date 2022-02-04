const db = require("../database/connection.js");

function post(request, response) {
  const id = parseInt(request.params.id);

  db.query("DELETE FROM blogpost WHERE id = $1", [id], (err, res) => {
    if (err) {
      console.log(err);
    }
    response.json(res);
  });
  //response.status(200).json(res);
  //const postItem = todo;
  //response.redirect("/posts");
  //response.status(200).json(todo);
}

module.exports = { post };

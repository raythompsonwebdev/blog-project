const db = require("../database/connection.js");

function post(request, response) {
  const id = parseInt(request.body.id);

  db.query("DELETE FROM blogpost WHERE id = $1", [id]),
    (err, res) => {
      if (err) {
        console.log(err);
      }
      response.status(200).json(res);
    };
  //response.status(200).json(res);
  //const postItem = todo;
  //response.redirect("/");
  //response.status(200).json(todo);
}

module.exports = { post };

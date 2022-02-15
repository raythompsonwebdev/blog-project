const db = require("../database/connection.js");

function post(request, response) {
  const { name, blogtitle, blogpost, mood, date } = request.body;
  db.query(
    `INSERT INTO blogpost(name, blogtitle, blogpost, mood , date) VALUES ($1, $2, $3, $4, $5)`,
    [name, blogtitle, blogpost, mood, date]
  ).then((data) => {
    console.log(data);
  });

  response.redirect("/posts");
}

module.exports = { post };

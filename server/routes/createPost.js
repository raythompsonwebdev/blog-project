//const db = require("../database/connection.js");
import db  from "../database/connection.js";

export default function post(request, response) {
  const { author, username, blogtitle, blogpost, mood, submitted } = request.body;
  db.query(
    `INSERT INTO blogpost(author, username, blogtitle, blogpost, mood , submitted) VALUES ($1, $2, $3, $4, $5)`,
    [author, username, blogtitle, blogpost, mood, submitted]
  ).then((data) => {
    console.log(data);
  });

  response.redirect("/posts");
}

//module.exports = { post };

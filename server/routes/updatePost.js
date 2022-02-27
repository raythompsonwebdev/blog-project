//const db = require("../database/connection.js");
import db  from "../database/connection.js";

export default function post(request, response) {
  const { id, name, blogtitle, blogpost, mood, date } = request.body;
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
    [id, name, blogtitle, blogpost, mood, date]
  ).then((data) => {
    console.log(data);
  });

  response.redirect("/posts");
}

//module.exports = { post };

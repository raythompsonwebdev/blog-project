import db  from "../database/connection.js";

export default function post(request, response) {
  const { id, name, blogtitle, blogpost, mood, submitted } = request.body;
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
    [name, blogtitle, blogpost, mood, submitted]
  ).then((data) => {
    console.log(data);
  });

  response.redirect("/posts");
}


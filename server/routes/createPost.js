import db from "../database/connection.js";

export default function createPost(request, response) {
  const { author, username, blogtitle, blogpost, mood, submitted } =
    request.body;

  console.log(request.body);

  db.query(
    "INSERT INTO blogpost(author, name, blogtitle, blogpost, mood , date) VALUES ($1, $2, $3, $4, $5, $6)",
    [author, username, blogtitle, blogpost, mood, submitted]
  );

  //   // response.send(data);
  // response.redirect("http://localhost:3000");
}

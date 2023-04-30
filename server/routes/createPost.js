import db  from "../database/connection.js";

export default function post(request, response) {

  const { author, username, blogtitle, blogpost, mood, submitted } = request.body;
  db.query(
    `INSERT INTO blogpost(author, username, blogtitle, blogpost, mood , submitted) VALUES ($1, $2, $3, $4, $5, $6)`,
    [author, username, blogtitle, blogpost, mood, submitted]
  ).then((data) => {
    console.log(data);
  }).catch((error) => {
<<<<<<< HEAD
    console.error(error);
=======
    response.status(500).json({error: error.message});
>>>>>>> c739980eb276379efc528f2d55831e78a6eb6a64
    // do stuff with the error here
  });

  response.redirect("http://localhost:3000");
}



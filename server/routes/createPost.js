//const db = require("../database/connection.js");
import db  from "../database/connection.js";

export default function post(request, response) {

  console.log(request.body);
  const { author, username, blogtitle, blogpost, mood, submitted } = request.body;
  db.query(
    `INSERT INTO blogpost(author, username, blogtitle, blogpost, mood , submitted) VALUES ($1, $2, $3, $4, $5, $6)`,
    [author, username, blogtitle, blogpost, mood, submitted]
  ).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.error(error);
    // do stuff with the error here
  });


  response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  response.setHeader("Vary", "Origin");

  response.redirect("http://localhost:3000");
}

//module.exports = { post };

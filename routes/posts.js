const db = require("../database/connection.js");

function get(request, response) {
  try {
    db.query("SELECT * FROM blogpost", (error, results) => {
      if (error) {
        throw error;
      }
      //console.log(results.rows);
      const posts = results.rows;
      response.send(posts);
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { get };

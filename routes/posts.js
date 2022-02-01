const db = require("../database/connection.js");

function get(request, response) {
  try {
    db.query("SELECT * FROM blogpost", (error, results) => {
      if (error) {
        throw error;
      }
      //console.log(results.rows);
      const posts = results.rows;
      const postItems = posts.map((post) => {
        return /*html*/ `
          <li>
          <p>${post.blogpost}</p>
          <p>${post.name}</p>
          </li>
        `;
      });
      response.send(`<ul>${postItems.join("")}</ul>`);
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { get };

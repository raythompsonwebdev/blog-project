const db = require("../database/connection.js");
//const layout = require("../layout.js");

function get(request, response) {
  try {
    // convert string to number
    const id = parseInt(request.params.id);

    db.query("SELECT * FROM blogpost WHERE id = $1", [id]).then((result) => {
      
      const postItem = result.rows[0];
     
      response.send(postItem);
    });
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { get };

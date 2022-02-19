const db = require("../database/connection.js");
//const layout = require("../layout.js");

const get = (request, response) => {
  try {
    
    db.query("SELECT * FROM blogpost", (error, results) => {
      if (error) {
        throw error;
      } else {
        //console.log(results.rows);
        const posts = results.rows;

        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Vary", "Origin");
       
        // set cookie
        response.cookie("hello", "this is my cookie", {
          httpOnly: true,
          maxAge: 1000 * 60, // 60,000ms (60s)
          sameSite: "lax",
        });

        response.send(posts);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { get };

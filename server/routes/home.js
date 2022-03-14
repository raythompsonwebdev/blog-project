//const db = require("../database/connection.js");
import db  from "../database/connection.js";

export default function get (request, response) {
  try {
    
    db.query("SELECT * FROM blogpost", (error, results) => {
      if (error) {
        throw error;
      } else {
        const posts = results.rows;

        // response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        // response.setHeader("Vary", "Origin");
       
        // set cookie
        // response.cookie("hello", "this is my cookie", {
        //   httpOnly: true,
        //   maxAge: 1000 * 60, // 60,000ms (60s)
        //   sameSite: "lax",
        // });

        response.send(posts);
      }
    });
  } catch (err) {
    response.status(500).json({error: err.message});
  }
};

// module.exports = { get };

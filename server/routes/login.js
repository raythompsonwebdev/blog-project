//const db = require("../database/connection.js");
//import db  from "../database/connection.js";

export default function post(request, response) {
  try {
    // convert string to number
    
     
      response.send("tester");
   
  } catch (err) {
    console.error(err.message);
  }
}

//module.exports = { get };

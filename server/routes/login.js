//const db = require("../database/connection.js");
//import db  from "../database/connection.js";
// import crypto from "crypto";

export default function post(request, response) {

  const password = "hunter2";

  // const hashedPassword = crypto
  //   .createHash("sha256")
  //   .update(password)
  //   .digest("hex");

    console.log(password)
  try {
    // convert string to number
    
     
      response.send("tester");
   
  } catch (err) {
    console.error(err.message);
  }
}

//module.exports = { get };

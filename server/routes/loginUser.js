import db  from "../database/connection.js";
import bcrypt from "bcrypt";
//import crypto from "crypto";
//import jwt from jsonwebtoken;



async function post(req, res) {

  // crypto
  // const password = "hunter2";
  // const hashedPassword = crypto
  //   .createHash("sha256")
  //   .update(password)
  //   .digest("hex");
  // console.log(hashedPassword);
    
  try {
    
    const { email, password } = req.body;
    const users = await db.query('SELECT * FROM users WHERE user_email = $1', [email]);
    if (users.rows.length === 0) return res.status(401).json({error:"Email is incorrect"});
    //PASSWORD CHECK
    const validPassword = await bcrypt.compare(password, users.rows[0].user_password);
    if (!validPassword) return res.status(401).json({error: "Incorrect password"});
    
  } catch (error) {
    res.status(401).json({error: error.message});
  }

}

export default {post};

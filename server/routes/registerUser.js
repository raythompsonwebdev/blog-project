import db from "../database/connection.js";
import { hashPassword, comparePassword } from "../utils/EncryptPassword.js";
import { generateToken, verifyJwt } from "../utils/jwt-helpers.js";
//let refreshTokens = [];

async function registerUser(request, response) {
  try {
    const { username, email, hashpassword, date_submitted } = request.body;

    const hashedPassword = await hashPassword(hashpassword);

    const newUser = await db.query(
      `INSERT INTO users ( username, email, hashpassword, date_submitted) VALUES ($1, $2, $3, $4)`,
      [username, email, hashedPassword, date_submitted]
    );

    response.json({ users: newUser.rows[0] });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }

  //response.redirect("http://localhost:3000");
}

//router.get("/users", async (req,res) =>{
// async function get(req, res) {

//   try{

//     const users = await db.query("SELECT * from users");
//     res.json({users:users.rows});

//   }catch(error){
//     res.status(500).json({error:error.message})
//   }

// }

export default registerUser;

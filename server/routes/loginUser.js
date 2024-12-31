import db from "../database/connection.js";
import { generateToken } from "../utils/jwt-helpers.js";
import { comparePassword } from "../utils/EncryptPassword.js";

async function loginUser(request, response) {
  try {
    const { email, password } = request.body;

    const results = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (results.rows.length === 0) {
      return response.send({ error: "User email not found" });
    }

    const validPassword = comparePassword(password, results.rows[0].password);

    if (validPassword == false) {
      return response.send({ passwordError: "User password not found" });
    }

    const userInfo = {
      username: results.rows[0].username,
      email: results.rows[0].email,
      password: results.rows[0].password,
    };

    generateToken(response, userInfo); //generate token and signed cookie

    response.json({ message: "User found" });

    //return response.redirect("user-profile");
  } catch (err) {
    console.error("Login Error:", err);
    response.status(500).json({ error: "User Not found" });
  }
}

export default loginUser;

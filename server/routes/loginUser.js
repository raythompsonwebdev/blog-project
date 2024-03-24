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
      return response.status(400).json({ error: "Email does not exist" });
    }

    const validPassword = comparePassword(password, results.rows[0].password);

    if (!validPassword) {
      return response.status(400).json({ error: "Incorrect password" });
    }

    const userInfo = {
      email: results.rows[0].email,
      password: results.rows[0].password,
    };

    generateToken(response, userInfo); //generate token and signed cookie

    response.status(200).json({ message: "User found" });
  } catch (err) {
    console.error("Login Error:", err);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export default loginUser;

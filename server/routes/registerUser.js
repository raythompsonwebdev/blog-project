import db from "../database/connection.js";
import { hashPassword } from "../utils/EncryptPassword.js";

async function registerUser(request, response) {
  const { username, email, password, dateSubmitted } = request.body;

  const hashpassword = await hashPassword(password);

  // check if username or email already exists
  const result = await db.query(
    "SELECT * FROM users WHERE username = $1 or email = $2",
    [username, email]
  );

  if (result.rows[0]?.username === username) {
    return response.json({ userError: "user already exists" });
  }

  if (result.rows[0]?.email === email) {
    return response.json({ emailError: "email already exists" });
  }

  // if (result.error) response.json({ error: error.message });
  db.query(
    `INSERT INTO users ( username, email, password, date) VALUES ($1, $2, $3, $4)`,
    [username, email, hashpassword, dateSubmitted],
    (error, results) => {
      if (error) {
        response.status(500).json({ error: error.message });
      }

      return response.json({
        resultCount: results.rowCount,
        message: "You have been added",
      });
    }
  );

  // response.redirect("/thankyou");
}

export default registerUser;

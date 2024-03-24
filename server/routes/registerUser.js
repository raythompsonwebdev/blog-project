import db from "../database/connection.js";
import { hashPassword } from "../utils/EncryptPassword.js";

async function registerUser(request, response) {
  const { username, email, password, dateSubmitted } = request.body;

  const hashpassword = await hashPassword(password);

  db.query(
    `INSERT INTO users ( username, email, password, date) VALUES ($1, $2, $3, $4)`,
    [username, email, hashpassword, dateSubmitted],
    (error, results) => {
      if (error) {
        response.status(500).json({ error: error.message });
      }

      console.log(results);
    }
  );

  // response.redirect("/thankyou");
}

export default registerUser;

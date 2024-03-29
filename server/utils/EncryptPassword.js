import bcrypt from "bcrypt";

async function hashPassword(plaintextPassword) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hash(plaintextPassword, salt);
  // Store hash in the database
  return hash;
}

function comparePassword(plaintextPassword, hash) {
  const result = bcrypt.compareSync(plaintextPassword, hash);

  return result;
}

export { hashPassword, comparePassword };

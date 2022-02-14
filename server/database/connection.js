// index.js
require("dotenv").config();

const { Pool } = require("pg");

// Connect to the database
const db = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
});

// export the pool object so we can query the DB in other files
module.exports = db;

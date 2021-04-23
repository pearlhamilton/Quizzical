const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL

const env = process.env.NODE_ENV;

let options;

if (env === "production") {
  options = { connectionString, ssl: { rejectUnauthorized: false } }
} else {
  options = { connectionString }
}

const pool = new Pool(options);

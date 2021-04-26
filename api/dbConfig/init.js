// Postgres
// const { Pool } = require("pg");
// const connectionString = process.env.DATABASE_URL

// const env = process.env.NODE_ENV;

// let options;

// if (env === "production") {
//   options = { connectionString, ssl: { rejectUnauthorized: false } }
// } else {
//   options = { connectionString }
// }

// const pool = new Pool(options);

// MongoDB
const { MongoClient } = require("mongodb");
const connectionUrl = process.env.DB_CONNECTION;

const dbName = process.env.DB_NAME;

const init = async () => {
    let client = await MongoClient.connect(connectionUrl);
    console.log("connected to database!", dbName);
    return client.db(dbName);
};

module.exports = { init };
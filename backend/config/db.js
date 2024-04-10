require("dotenv").config();

const DB_HOST = process.env.WHIZLABS_HOST;
const DB_USER = process.env.WHIZLABS_USER; 
const DB_PASSWORD = process.env.WHIZLABS_PASSWORD;
const DB_NAME = process.env.WHIZLABS_DB_NAME;
const DB_PORT = process.env.WHIZLABS_PORT || 3306;
const DB_POOL = { min: 0, max: 15 };

const KnexDB = require("knex")({
  client: "mysql",
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
  },
  pool: DB_POOL
});

module.exports = { KnexDB };
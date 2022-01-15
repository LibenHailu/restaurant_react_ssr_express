const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "restaurant_management_db",
  password: "admin",
  port: 5432,
  host: "localhost",
});

module.exports = { pool };

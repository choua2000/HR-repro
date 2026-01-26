// config/db.js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hr_db",
  password: "chouavang",
  port: 5432,
});

// Test the connection immediately
pool.connect()
  .then(client => {
    console.log("Database connected successfully");
    client.release(); // release the client back to the pool
  })
  .catch(err => {
    console.error("Database connection error:", err.message);
  });

export default pool;

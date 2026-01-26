import express from 'express';
import dotenv from 'dotenv';
import pool from './src/config/db.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
pool
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



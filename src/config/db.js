// config/db.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("hr_db", "postgres", "chouavang", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// Test the connection immediately
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .then(() => {
    sequelize.sync();
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
  });
export default sequelize;

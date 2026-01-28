// config/db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: process.env.DB_DIALECT,
//     logging: false,
//     dialectOptions: {
//       options: {
//         encrypt: false, // true if Azure
//         trustServerCertificate: true,
//       },
//     },
//   }
// );

const sequelize = new Sequelize("hr_db", "postgres", "chouavang", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  // .then(() => {
  //   console.log("Syncing database");
  //   return sequelize.sync({ force: true });
  // })
  // .then(() => {
  //   console.log("Database synchronized successfully");
  // })
  .catch((err) => {
    console.error("Database connection error:", err.message);
  });

export default sequelize;

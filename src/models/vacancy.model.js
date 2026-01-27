import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Vacancy = sequelize.define("Vacancy", {
    id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_post: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "vacancies",
  timestamps: true,
});

export default Vacancy;

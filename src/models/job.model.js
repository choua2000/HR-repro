import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Job = sequelize.define(
  "Job",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    logo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    type: {
      type: DataTypes.STRING, // Full-time, Part-time, Contract
      allowNull: false,
    },

    salary: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    posted_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "jobs",
    timestamps: true,
    underscored: true, // created_at, updated_at
  }
);

export default Job;

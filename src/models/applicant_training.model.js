import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ApplicantTraining = sequelize.define(
    "ApplicantTraining",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        application_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "job_applications",
                key: "id",
            },
        },

        company_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        department: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        main_duty: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        sort_order: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
    },
    {
        tableName: "applicant_trainings",
        timestamps: false,
    }
);

export default ApplicantTraining;

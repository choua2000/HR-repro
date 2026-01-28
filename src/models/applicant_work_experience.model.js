import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ApplicantWorkExperience = sequelize.define(
    "ApplicantWorkExperience",
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

        from_to: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        salary: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        position: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        employer_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        employer_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        duties_description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        reason_for_leaving: {
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
        tableName: "applicant_work_experiences",
        timestamps: false,
    }
);

export default ApplicantWorkExperience;

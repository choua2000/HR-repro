import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ApplicantEducation = sequelize.define(
    "ApplicantEducation",
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

        university_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        qualification: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        major: {
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
        tableName: "applicant_educations",
        timestamps: false,
    }
);

export default ApplicantEducation;

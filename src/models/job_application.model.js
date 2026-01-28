import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const JobApplication = sequelize.define(
    "JobApplication",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        job_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "jobs",
                key: "id",
            },
        },

        photo_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        name_and_surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date_of_birth: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },

        place_of_birth: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        current_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        village: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        district: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        province: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        contact_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
            },
        },

        nationality: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        marital_status: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        sex: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        how_know_job: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        salary_expecting: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        ref_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        ref_occupation: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        ref_company: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        ref_address_tel: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        signature: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        signature_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },

        status: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "pending", // pending, reviewed, accepted, rejected
        },
    },
    {
        tableName: "job_applications",
        timestamps: true,
        underscored: true, // created_at, updated_at
    }
);

export default JobApplication;

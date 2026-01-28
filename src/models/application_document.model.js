import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ApplicationDocument = sequelize.define(
    "ApplicationDocument",
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

        file_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        file_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        file_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        file_size: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        uploaded_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "application_documents",
        timestamps: false,
    }
);

export default ApplicationDocument;

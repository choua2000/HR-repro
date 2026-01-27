import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Application = sequelize.define("Application", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    apply_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "pending",
        comment: "e.g., pending, reviewed, shortlisted, rejected, hired",
    },
}, {
    tableName: "applications",
    timestamps: true,
});

export default Application;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const EmploymentHistory = sequelize.define("EmploymentHistory", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    from_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    to_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    salary: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true,
    },
    position_title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    employer_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    employer_address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    duties_description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    reason_for_leaving: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: "employment_histories",
    timestamps: true,
});

export default EmploymentHistory;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Training = sequelize.define("Training", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    main_duty: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "trainings",
    timestamps: true,
});

export default Training;

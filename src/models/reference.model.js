import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Reference = sequelize.define("Reference", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name_surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address_telephone: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: "references",
    timestamps: true,
});

export default Reference;

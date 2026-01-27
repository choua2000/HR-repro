import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Education = sequelize.define("Education", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    university_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    qualification: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    major: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "educations",
    timestamps: true,
});

export default Education;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Candidate = sequelize.define("Candidate", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name_surname: {
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
        type: DataTypes.TEXT,
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
    source_of_job_ad: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "How did you know about this job advertising",
    },
    salary_expected: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true,
    },
}, {
    tableName: "candidates",
    timestamps: true,
});

export default Candidate;

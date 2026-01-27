import sequelize from "../config/db.js";
import Vacancy from "./vacancy.model.js";
import Candidate from "./candidate.model.js";
import Education from "./education.model.js";
import Training from "./training.model.js";
import EmploymentHistory from "./employment_history.model.js";
import Reference from "./reference.model.js";
import Application from "./application.model.js";

// ==========================================
// ASSOCIATIONS / RELATIONSHIPS
// ==========================================

// Candidate has many Education records
Candidate.hasMany(Education, {
    foreignKey: "candidateId",
    as: "educations",
});
Education.belongsTo(Candidate, {
    foreignKey: "candidateId",
    as: "candidate",
});

// Candidate has many Training records
Candidate.hasMany(Training, {
    foreignKey: "candidateId",
    as: "trainings",
});
Training.belongsTo(Candidate, {
    foreignKey: "candidateId",
    as: "candidate",
});

// Candidate has many EmploymentHistory records
Candidate.hasMany(EmploymentHistory, {
    foreignKey: "candidateId",
    as: "employmentHistories",
});
EmploymentHistory.belongsTo(Candidate, {
    foreignKey: "candidateId",
    as: "candidate",
});

// Candidate has many Reference records
Candidate.hasMany(Reference, {
    foreignKey: "candidateId",
    as: "references",
});
Reference.belongsTo(Candidate, {
    foreignKey: "candidateId",
    as: "candidate",
});

// Many-to-Many: Candidate <-> Vacancy through Application
Candidate.belongsToMany(Vacancy, {
    through: Application,
    foreignKey: "candidateId",
    otherKey: "vacancyId",
    as: "appliedVacancies",
});
Vacancy.belongsToMany(Candidate, {
    through: Application,
    foreignKey: "vacancyId",
    otherKey: "candidateId",
    as: "applicants",
});

// Direct associations for Application
Application.belongsTo(Candidate, { foreignKey: "candidateId", as: "candidate" });
Application.belongsTo(Vacancy, { foreignKey: "vacancyId", as: "vacancy" });
Candidate.hasMany(Application, { foreignKey: "candidateId", as: "applications" });
Vacancy.hasMany(Application, { foreignKey: "vacancyId", as: "applications" });

// ==========================================
// SYNC DATABASE
// ==========================================
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("All models synchronized successfully.");
    } catch (error) {
        console.error("Error synchronizing models:", error);
    }
};

export {
    sequelize,
    Vacancy,
    Candidate,
    Education,
    Training,
    EmploymentHistory,
    Reference,
    Application,
    syncDatabase,
};

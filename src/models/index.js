import sequelize from "../config/db.js";

// Import all models
import Job from "./job.model.js";
import JobApplication from "./job_application.model.js";
import ApplicantEducation from "./applicant_education.model.js";
import ApplicantTraining from "./applicant_training.model.js";
import ApplicantWorkExperience from "./applicant_work_experience.model.js";
import ApplicationDocument from "./application_document.model.js";

// ==========================================
// ASSOCIATIONS / RELATIONSHIPS
// ==========================================

// Job has many JobApplications
Job.hasMany(JobApplication, {
    foreignKey: "job_id",
    as: "applications",
    onDelete: "CASCADE",
});
JobApplication.belongsTo(Job, {
    foreignKey: "job_id",
    as: "job",
});

// JobApplication has many ApplicantEducations
JobApplication.hasMany(ApplicantEducation, {
    foreignKey: "application_id",
    as: "educations",
    onDelete: "CASCADE",
});
ApplicantEducation.belongsTo(JobApplication, {
    foreignKey: "application_id",
    as: "application",
});

// JobApplication has many ApplicantTrainings
JobApplication.hasMany(ApplicantTraining, {
    foreignKey: "application_id",
    as: "trainings",
    onDelete: "CASCADE",
});
ApplicantTraining.belongsTo(JobApplication, {
    foreignKey: "application_id",
    as: "application",
});

// JobApplication has many ApplicantWorkExperiences
JobApplication.hasMany(ApplicantWorkExperience, {
    foreignKey: "application_id",
    as: "workExperiences",
    onDelete: "CASCADE",
});
ApplicantWorkExperience.belongsTo(JobApplication, {
    foreignKey: "application_id",
    as: "application",
});

// JobApplication has many ApplicationDocuments
JobApplication.hasMany(ApplicationDocument, {
    foreignKey: "application_id",
    as: "documents",
    onDelete: "CASCADE",
});
ApplicationDocument.belongsTo(JobApplication, {
    foreignKey: "application_id",
    as: "application",
});

// ==========================================
// SYNC DATABASE (uncomment when needed)
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
    Job,
    JobApplication,
    ApplicantEducation,
    ApplicantTraining,
    ApplicantWorkExperience,
    ApplicationDocument,
    syncDatabase,
};

import {
    JobApplication,
    ApplicantEducation,
    ApplicantTraining,
    ApplicantWorkExperience,
    ApplicationDocument,
    Job,
} from "../models/index.js";

class JobApplicationService {
    // Create application with related data
    async create(data) {
        const { educations, trainings, workExperiences, documents, ...applicationData } = data;

        // Create the main application
        const application = await JobApplication.create(applicationData);

        // Create related records if provided
        if (educations && educations.length > 0) {
            const educationRecords = educations.map((edu, index) => ({
                ...edu,
                application_id: application.id,
                sort_order: edu.sort_order ?? index,
            }));
            await ApplicantEducation.bulkCreate(educationRecords);
        }

        if (trainings && trainings.length > 0) {
            const trainingRecords = trainings.map((training, index) => ({
                ...training,
                application_id: application.id,
                sort_order: training.sort_order ?? index,
            }));
            await ApplicantTraining.bulkCreate(trainingRecords);
        }

        if (workExperiences && workExperiences.length > 0) {
            const workRecords = workExperiences.map((work, index) => ({
                ...work,
                application_id: application.id,
                sort_order: work.sort_order ?? index,
            }));
            await ApplicantWorkExperience.bulkCreate(workRecords);
        }

        if (documents && documents.length > 0) {
            const docRecords = documents.map((doc) => ({
                ...doc,
                application_id: application.id,
            }));
            await ApplicationDocument.bulkCreate(docRecords);
        }

        return await this.findById(application.id);
    }

    // Get all applications
    async findAll() {
        return await JobApplication.findAll({
            include: [{ association: "job" }],
            order: [["created_at", "DESC"]],
        });
    }

    // Get applications by job ID
    async findByJobId(jobId) {
        return await JobApplication.findAll({
            where: { job_id: jobId },
            include: [
                { association: "educations", order: [["sort_order", "ASC"]] },
                { association: "trainings", order: [["sort_order", "ASC"]] },
                { association: "workExperiences", order: [["sort_order", "ASC"]] },
                { association: "documents" },
            ],
            order: [["created_at", "DESC"]],
        });
    }

    // Get application by ID with all related data
    async findById(id) {
        return await JobApplication.findByPk(id, {
            include: [
                { association: "job" },
                { association: "educations", order: [["sort_order", "ASC"]] },
                { association: "trainings", order: [["sort_order", "ASC"]] },
                { association: "workExperiences", order: [["sort_order", "ASC"]] },
                { association: "documents" },
            ],
        });
    }

    // Update application
    async update(id, data) {
        const application = await JobApplication.findByPk(id);
        if (!application) return null;

        const { educations, trainings, workExperiences, documents, ...applicationData } = data;

        await application.update(applicationData);

        // Update related records if provided
        if (educations !== undefined) {
            await ApplicantEducation.destroy({ where: { application_id: id } });
            if (educations.length > 0) {
                const educationRecords = educations.map((edu, index) => ({
                    ...edu,
                    application_id: id,
                    sort_order: edu.sort_order ?? index,
                }));
                await ApplicantEducation.bulkCreate(educationRecords);
            }
        }

        if (trainings !== undefined) {
            await ApplicantTraining.destroy({ where: { application_id: id } });
            if (trainings.length > 0) {
                const trainingRecords = trainings.map((training, index) => ({
                    ...training,
                    application_id: id,
                    sort_order: training.sort_order ?? index,
                }));
                await ApplicantTraining.bulkCreate(trainingRecords);
            }
        }

        if (workExperiences !== undefined) {
            await ApplicantWorkExperience.destroy({ where: { application_id: id } });
            if (workExperiences.length > 0) {
                const workRecords = workExperiences.map((work, index) => ({
                    ...work,
                    application_id: id,
                    sort_order: work.sort_order ?? index,
                }));
                await ApplicantWorkExperience.bulkCreate(workRecords);
            }
        }

        if (documents !== undefined) {
            await ApplicationDocument.destroy({ where: { application_id: id } });
            if (documents.length > 0) {
                const docRecords = documents.map((doc) => ({
                    ...doc,
                    application_id: id,
                }));
                await ApplicationDocument.bulkCreate(docRecords);
            }
        }

        return await this.findById(id);
    }

    // Update application status
    async updateStatus(id, status) {
        const application = await JobApplication.findByPk(id);
        if (!application) return null;

        await application.update({ status });
        return application;
    }

    // Delete application
    async delete(id) {
        const application = await JobApplication.findByPk(id);
        if (!application) return null;

        await application.destroy();
        return true;
    }
}

export default new JobApplicationService();

import { ApplicantWorkExperience } from "../models/index.js";

class ApplicantWorkExperienceService {
    // Create work experience record
    async create(data) {
        return await ApplicantWorkExperience.create(data);
    }

    // Get all work experience records
    async findAll() {
        return await ApplicantWorkExperience.findAll({
            order: [["sort_order", "ASC"]],
        });
    }

    // Get work experience records by application ID
    async findByApplicationId(applicationId) {
        return await ApplicantWorkExperience.findAll({
            where: { application_id: applicationId },
            order: [["sort_order", "ASC"]],
        });
    }

    // Get work experience record by ID
    async findById(id) {
        return await ApplicantWorkExperience.findByPk(id);
    }

    // Update work experience record
    async update(id, data) {
        const workExperience = await ApplicantWorkExperience.findByPk(id);
        if (!workExperience) return null;

        await workExperience.update(data);
        return workExperience;
    }

    // Delete work experience record
    async delete(id) {
        const workExperience = await ApplicantWorkExperience.findByPk(id);
        if (!workExperience) return null;

        await workExperience.destroy();
        return true;
    }

    // Bulk create work experience records for an application
    async bulkCreate(applicationId, workExperiences) {
        const records = workExperiences.map((work, index) => ({
            ...work,
            application_id: applicationId,
            sort_order: work.sort_order ?? index,
        }));
        return await ApplicantWorkExperience.bulkCreate(records);
    }
}

export default new ApplicantWorkExperienceService();

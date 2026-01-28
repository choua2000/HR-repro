import { ApplicantEducation } from "../models/index.js";

class ApplicantEducationService {
    // Create education record
    async create(data) {
        return await ApplicantEducation.create(data);
    }

    // Get all education records
    async findAll() {
        return await ApplicantEducation.findAll({
            order: [["sort_order", "ASC"]],
        });
    }

    // Get education records by application ID
    async findByApplicationId(applicationId) {
        return await ApplicantEducation.findAll({
            where: { application_id: applicationId },
            order: [["sort_order", "ASC"]],
        });
    }

    // Get education record by ID
    async findById(id) {
        return await ApplicantEducation.findByPk(id);
    }

    // Update education record
    async update(id, data) {
        const education = await ApplicantEducation.findByPk(id);
        if (!education) return null;

        await education.update(data);
        return education;
    }

    // Delete education record
    async delete(id) {
        const education = await ApplicantEducation.findByPk(id);
        if (!education) return null;

        await education.destroy();
        return true;
    }

    // Bulk create education records for an application
    async bulkCreate(applicationId, educations) {
        const records = educations.map((edu, index) => ({
            ...edu,
            application_id: applicationId,
            sort_order: edu.sort_order ?? index,
        }));
        return await ApplicantEducation.bulkCreate(records);
    }
}

export default new ApplicantEducationService();

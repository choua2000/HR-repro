import { Education } from "../models/index.js";

class EducationService {
    // Create education record
    async create(data) {
        return await Education.create(data);
    }

    // Get all education records
    async findAll() {
        return await Education.findAll({
            order: [["createdAt", "DESC"]],
        });
    }

    // Get education records by candidate ID
    async findByCandidateId(candidateId) {
        return await Education.findAll({
            where: { candidateId },
            order: [["createdAt", "DESC"]],
        });
    }

    // Get education by UUID
    async findById(id) {
        return await Education.findByPk(id);
    }

    // Update education
    async update(id, data) {
        const education = await Education.findByPk(id);
        if (!education) return null;

        await education.update(data);
        return education;
    }

    // Delete education
    async delete(id) {
        const education = await Education.findByPk(id);
        if (!education) return null;

        await education.destroy();
        return true;
    }
}

export default new EducationService();

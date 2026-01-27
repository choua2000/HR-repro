import { Reference } from "../models/index.js";

class ReferenceService {
    // Create reference record
    async create(data) {
        return await Reference.create(data);
    }

    // Get all reference records
    async findAll() {
        return await Reference.findAll({
            order: [["createdAt", "DESC"]],
        });
    }

    // Get reference records by candidate ID
    async findByCandidateId(candidateId) {
        return await Reference.findAll({
            where: { candidateId },
            order: [["createdAt", "DESC"]],
        });
    }

    // Get reference by UUID
    async findById(id) {
        return await Reference.findByPk(id);
    }

    // Update reference
    async update(id, data) {
        const reference = await Reference.findByPk(id);
        if (!reference) return null;

        await reference.update(data);
        return reference;
    }

    // Delete reference
    async delete(id) {
        const reference = await Reference.findByPk(id);
        if (!reference) return null;

        await reference.destroy();
        return true;
    }
}

export default new ReferenceService();

import { EmploymentHistory } from "../models/index.js";

class EmploymentHistoryService {
    // Create employment history record
    async create(data) {
        return await EmploymentHistory.create(data);
    }

    // Get all employment history records
    async findAll() {
        return await EmploymentHistory.findAll({
            order: [["from_date", "DESC"]],
        });
    }

    // Get employment history records by candidate ID
    async findByCandidateId(candidateId) {
        return await EmploymentHistory.findAll({
            where: { candidateId },
            order: [["from_date", "DESC"]],
        });
    }

    // Get employment history by UUID
    async findById(id) {
        return await EmploymentHistory.findByPk(id);
    }

    // Update employment history
    async update(id, data) {
        const history = await EmploymentHistory.findByPk(id);
        if (!history) return null;

        await history.update(data);
        return history;
    }

    // Delete employment history
    async delete(id) {
        const history = await EmploymentHistory.findByPk(id);
        if (!history) return null;

        await history.destroy();
        return true;
    }
}

export default new EmploymentHistoryService();

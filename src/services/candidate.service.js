import { Candidate, Education, Training, EmploymentHistory, Reference } from "../models/index.js";

class CandidateService {
    // Create candidate with related data
    async create(data) {
        return await Candidate.create(data);
    }

    // Get all candidates
    async findAll() {
        return await Candidate.findAll({
            order: [["createdAt", "DESC"]],
        });
    }

    // Get all candidates with full details
    async findAllWithDetails() {
        return await Candidate.findAll({
            include: [
                { model: Education, as: "educations" },
                { model: Training, as: "trainings" },
                { model: EmploymentHistory, as: "employmentHistories" },
                { model: Reference, as: "references" },
            ],
            order: [["createdAt", "DESC"]],
        });
    }

    // Get candidate by UUID
    async findById(id) {
        return await Candidate.findByPk(id);
    }

    // Get candidate by UUID with all related data
    async findByIdWithDetails(id) {
        return await Candidate.findByPk(id, {
            include: [
                { model: Education, as: "educations" },
                { model: Training, as: "trainings" },
                { model: EmploymentHistory, as: "employmentHistories" },
                { model: Reference, as: "references" },
            ],
        });
    }

    // Update candidate
    async update(id, data) {
        const candidate = await Candidate.findByPk(id);
        if (!candidate) return null;

        await candidate.update(data);
        return candidate;
    }

    // Delete candidate
    async delete(id) {
        const candidate = await Candidate.findByPk(id);
        if (!candidate) return null;

        await candidate.destroy();
        return true;
    }
}

export default new CandidateService();

import { Application, Candidate, Vacancy } from "../models/index.js";

class ApplicationService {
    // Create application
    async create(data) {
        return await Application.create(data);
    }

    // Get all applications
    async findAll() {
        return await Application.findAll({
            include: [
                { model: Candidate, as: "candidate" },
                { model: Vacancy, as: "vacancy" },
            ],
            order: [["createdAt", "DESC"]],
        });
    }

    // Get applications by candidate ID
    async findByCandidateId(candidateId) {
        return await Application.findAll({
            where: { candidateId },
            include: [{ model: Vacancy, as: "vacancy" }],
            order: [["createdAt", "DESC"]],
        });
    }

    // Get applications by vacancy ID
    async findByVacancyId(vacancyId) {
        return await Application.findAll({
            where: { vacancyId },
            include: [{ model: Candidate, as: "candidate" }],
            order: [["createdAt", "DESC"]],
        });
    }

    // Get application by UUID
    async findById(id) {
        return await Application.findByPk(id, {
            include: [
                { model: Candidate, as: "candidate" },
                { model: Vacancy, as: "vacancy" },
            ],
        });
    }

    // Update application (e.g., status change)
    async update(id, data) {
        const application = await Application.findByPk(id);
        if (!application) return null;

        await application.update(data);
        return application;
    }

    // Delete application
    async delete(id) {
        const application = await Application.findByPk(id);
        if (!application) return null;

        await application.destroy();
        return true;
    }
}

export default new ApplicationService();

import { Candidate, Training } from "../models/index.js";

class TrainingService {
    // Create training record
    async create(data) {
        return await Training.create(data);
    }

    // Get all training records
    async findAll() {
        return await Training.findAll({
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: Candidate,
                    as: "candidate",
                    attributes: ["id", "name_surname", "date_of_birth"],
                },
            ],
        });
    }

    // Get training records by candidate ID
    async findByCandidateId(candidateId) {
        return await Training.findAll({
            where: { candidateId },
            order: [["createdAt", "DESC"]],
        });
    }

    // Get training by UUID
    async findById(id) {
        return await Training.findByPk(id);
    }

    // Update training
    async update(id, data) {
        const training = await Training.findByPk(id);
        if (!training) return null;

        await training.update(data);
        return training;
    }

    // Delete training
    async delete(id) {
        const training = await Training.findByPk(id);
        if (!training) return null;

        await training.destroy();
        return true;
    }
}

export default new TrainingService();

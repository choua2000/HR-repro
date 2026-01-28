import { ApplicantTraining } from "../models/index.js";

class ApplicantTrainingService {
    // Create training record
    async create(data) {
        return await ApplicantTraining.create(data);
    }

    // Get all training records
    async findAll() {
        return await ApplicantTraining.findAll({
            order: [["sort_order", "ASC"]],
        });
    }

    // Get training records by application ID
    async findByApplicationId(applicationId) {
        return await ApplicantTraining.findAll({
            where: { application_id: applicationId },
            order: [["sort_order", "ASC"]],
        });
    }

    // Get training record by ID
    async findById(id) {
        return await ApplicantTraining.findByPk(id);
    }

    // Update training record
    async update(id, data) {
        const training = await ApplicantTraining.findByPk(id);
        if (!training) return null;

        await training.update(data);
        return training;
    }

    // Delete training record
    async delete(id) {
        const training = await ApplicantTraining.findByPk(id);
        if (!training) return null;

        await training.destroy();
        return true;
    }

    // Bulk create training records for an application
    async bulkCreate(applicationId, trainings) {
        const records = trainings.map((training, index) => ({
            ...training,
            application_id: applicationId,
            sort_order: training.sort_order ?? index,
        }));
        return await ApplicantTraining.bulkCreate(records);
    }
}

export default new ApplicantTrainingService();

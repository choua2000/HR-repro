import { Job, JobApplication } from "../models/index.js";

class JobService {
    // Create job
    async create(data) {
        return await Job.create(data);
    }

    // Get all jobs
    async findAll() {
        return await Job.findAll({
            order: [["created_at", "DESC"]],
        });
    }

    // Get all active jobs
    async findAllActive() {
        return await Job.findAll({
            where: { is_active: true },
            order: [["posted_date", "DESC"]],
        });
    }

    // Get job by ID
    async findById(id) {
        return await Job.findByPk(id);
    }

    // Get job by ID with applications
    async findByIdWithApplications(id) {
        return await Job.findByPk(id, {
            include: [
                {
                    association: "applications",
                    order: [["created_at", "DESC"]],
                },
            ],
        });
    }

    // Update job
    async update(id, data) {
        const job = await Job.findByPk(id);
        if (!job) return null;

        await job.update(data);
        return job;
    }

    // Delete job
    async delete(id) {
        const job = await Job.findByPk(id);
        if (!job) return null;

        await job.destroy();
        return true;
    }
}

export default new JobService();

import jobService from "../services/job.service.js";

class JobController {
    // POST /jobs
    async create(req, res) {
        try {
            const job = await jobService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Job created successfully",
                data: job,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /jobs
    async findAll(req, res) {
        try {
            const jobs = await jobService.findAll();
            return res.status(200).json({
                success: true,
                data: jobs,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /jobs/active
    async findAllActive(req, res) {
        try {
            const jobs = await jobService.findAllActive();
            return res.status(200).json({
                success: true,
                data: jobs,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /jobs/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const job = await jobService.findById(id);

            if (!job) {
                return res.status(404).json({
                    success: false,
                    message: "Job not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: job,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /jobs/:id/applications
    async findByIdWithApplications(req, res) {
        try {
            const { id } = req.params;
            const job = await jobService.findByIdWithApplications(id);

            if (!job) {
                return res.status(404).json({
                    success: false,
                    message: "Job not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: job,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /jobs/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const job = await jobService.update(id, req.body);

            if (!job) {
                return res.status(404).json({
                    success: false,
                    message: "Job not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Job updated successfully",
                data: job,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /jobs/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await jobService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Job not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Job deleted successfully",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

export default new JobController();

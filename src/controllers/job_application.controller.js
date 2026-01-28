import jobApplicationService from "../services/job_application.service.js";

class JobApplicationController {
    // POST /applications
    async create(req, res) {
        try {
            const application = await jobApplicationService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Application submitted successfully",
                data: application,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /applications
    async findAll(req, res) {
        try {
            const applications = await jobApplicationService.findAll();
            return res.status(200).json({
                success: true,
                data: applications,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /applications/job/:jobId
    async findByJobId(req, res) {
        try {
            const { jobId } = req.params;
            const applications = await jobApplicationService.findByJobId(jobId);
            return res.status(200).json({
                success: true,
                data: applications,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /applications/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const application = await jobApplicationService.findById(id);

            if (!application) {
                return res.status(404).json({
                    success: false,
                    message: "Application not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: application,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /applications/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const application = await jobApplicationService.update(id, req.body);

            if (!application) {
                return res.status(404).json({
                    success: false,
                    message: "Application not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Application updated successfully",
                data: application,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // PATCH /applications/:id/status
    async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            if (!status) {
                return res.status(400).json({
                    success: false,
                    message: "Status is required",
                });
            }

            const application = await jobApplicationService.updateStatus(id, status);

            if (!application) {
                return res.status(404).json({
                    success: false,
                    message: "Application not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Application status updated successfully",
                data: application,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /applications/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await jobApplicationService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Application not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Application deleted successfully",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

export default new JobApplicationController();

import applicationService from "../services/application.service.js";

class ApplicationController {
    // POST /applications
    async create(req, res) {
        try {
            const application = await applicationService.create(req.body);
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
            const applications = await applicationService.findAll();
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

    // GET /applications/candidate/:candidateId
    async findByCandidateId(req, res) {
        try {
            const { candidateId } = req.params;
            const applications = await applicationService.findByCandidateId(candidateId);
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

    // GET /applications/vacancy/:vacancyId
    async findByVacancyId(req, res) {
        try {
            const { vacancyId } = req.params;
            const applications = await applicationService.findByVacancyId(vacancyId);
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
            const application = await applicationService.findById(id);

            if (!application) {
                return res.status(404).json({
                    success: false,
                    message: "Application not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                data: application,
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /applications/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const application = await applicationService.update(id, req.body);

            if (!application) {
                return res.status(404).json({
                    success: false,
                    message: "Application not found",
                });
            }

            return res.status(200).json({
                code: 200,
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

    // DELETE /applications/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await applicationService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Application not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Application deleted successfully",
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }
}

export default new ApplicationController();

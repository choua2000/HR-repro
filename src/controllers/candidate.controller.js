import candidateService from "../services/candidate.service.js";

class CandidateController {
    // POST /candidates
    async create(req, res) {
        try {
            const candidate = await candidateService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Candidate created successfully",
                data: candidate,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /candidates
    async findAll(req, res) {
        try {
            const candidates = await candidateService.findAll();
            return res.status(200).json({
                success: true,
                data: candidates,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /candidates/details
    async findAllWithDetails(req, res) {
        try {
            const candidates = await candidateService.findAllWithDetails();
            return res.status(200).json({
                success: true,
                data: candidates,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /candidates/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const candidate = await candidateService.findById(id);

            if (!candidate) {
                return res.status(404).json({
                    success: false,
                    message: "Candidate not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                data: candidate,
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }

    // GET /candidates/:id/details
    async findByIdWithDetails(req, res) {
        try {
            const { id } = req.params;
            const candidate = await candidateService.findByIdWithDetails(id);

            if (!candidate) {
                return res.status(404).json({
                    success: false,
                    message: "Candidate not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                data: candidate,
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /candidates/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const candidate = await candidateService.update(id, req.body);

            if (!candidate) {
                return res.status(404).json({
                    success: false,
                    message: "Candidate not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Candidate updated successfully",
                data: candidate,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /candidates/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await candidateService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Candidate not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Candidate deleted successfully",
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

export default new CandidateController();

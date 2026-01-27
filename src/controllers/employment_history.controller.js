import employmentHistoryService from "../services/employment_history.service.js";

class EmploymentHistoryController {
    // POST /employment-histories
    async create(req, res) {
        try {
            const history = await employmentHistoryService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Employment history created successfully",
                data: history,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /employment-histories
    async findAll(req, res) {
        try {
            const histories = await employmentHistoryService.findAll();
            return res.status(200).json({
                success: true,
                data: histories,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /employment-histories/candidate/:candidateId
    async findByCandidateId(req, res) {
        try {
            const { candidateId } = req.params;
            const histories = await employmentHistoryService.findByCandidateId(candidateId);
            return res.status(200).json({
                success: true,
                data: histories,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /employment-histories/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const history = await employmentHistoryService.findById(id);

            if (!history) {
                return res.status(404).json({
                    success: false,
                    message: "Employment history not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                data: history,
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /employment-histories/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const history = await employmentHistoryService.update(id, req.body);

            if (!history) {
                return res.status(404).json({
                    success: false,
                    message: "Employment history not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Employment history updated successfully",
                data: history,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /employment-histories/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await employmentHistoryService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Employment history not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Employment history deleted successfully",
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

export default new EmploymentHistoryController();

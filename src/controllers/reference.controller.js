import referenceService from "../services/reference.service.js";

class ReferenceController {
    // POST /references
    async create(req, res) {
        try {
            const reference = await referenceService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Reference created successfully",
                data: reference,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /references
    async findAll(req, res) {
        try {
            const references = await referenceService.findAll();
            return res.status(200).json({
                success: true,
                data: references,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /references/candidate/:candidateId
    async findByCandidateId(req, res) {
        try {
            const { candidateId } = req.params;
            const references = await referenceService.findByCandidateId(candidateId);
            return res.status(200).json({
                success: true,
                data: references,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /references/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const reference = await referenceService.findById(id);

            if (!reference) {
                return res.status(404).json({
                    success: false,
                    message: "Reference not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                data: reference,
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /references/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const reference = await referenceService.update(id, req.body);

            if (!reference) {
                return res.status(404).json({
                    success: false,
                    message: "Reference not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Reference updated successfully",
                data: reference,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /references/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await referenceService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Reference not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Reference deleted successfully",
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

export default new ReferenceController();

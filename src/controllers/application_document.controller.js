import applicationDocumentService from "../services/application_document.service.js";

class ApplicationDocumentController {
    // POST /documents
    async create(req, res) {
        try {
            const document = await applicationDocumentService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Document uploaded successfully",
                data: document,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /documents
    async findAll(req, res) {
        try {
            const documents = await applicationDocumentService.findAll();
            return res.status(200).json({
                success: true,
                data: documents,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /documents/application/:applicationId
    async findByApplicationId(req, res) {
        try {
            const { applicationId } = req.params;
            const documents = await applicationDocumentService.findByApplicationId(applicationId);
            return res.status(200).json({
                success: true,
                data: documents,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /documents/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const document = await applicationDocumentService.findById(id);

            if (!document) {
                return res.status(404).json({
                    success: false,
                    message: "Document not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: document,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /documents/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const document = await applicationDocumentService.update(id, req.body);

            if (!document) {
                return res.status(404).json({
                    success: false,
                    message: "Document not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Document updated successfully",
                data: document,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /documents/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await applicationDocumentService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Document not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Document deleted successfully",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

export default new ApplicationDocumentController();

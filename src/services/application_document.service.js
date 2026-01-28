import { ApplicationDocument } from "../models/index.js";

class ApplicationDocumentService {
    // Create document record
    async create(data) {
        return await ApplicationDocument.create(data);
    }

    // Get all document records
    async findAll() {
        return await ApplicationDocument.findAll({
            order: [["uploaded_at", "DESC"]],
        });
    }

    // Get document records by application ID
    async findByApplicationId(applicationId) {
        return await ApplicationDocument.findAll({
            where: { application_id: applicationId },
            order: [["uploaded_at", "DESC"]],
        });
    }

    // Get document record by ID
    async findById(id) {
        return await ApplicationDocument.findByPk(id);
    }

    // Update document record
    async update(id, data) {
        const document = await ApplicationDocument.findByPk(id);
        if (!document) return null;

        await document.update(data);
        return document;
    }

    // Delete document record
    async delete(id) {
        const document = await ApplicationDocument.findByPk(id);
        if (!document) return null;

        await document.destroy();
        return true;
    }

    // Bulk create document records for an application
    async bulkCreate(applicationId, documents) {
        const records = documents.map((doc) => ({
            ...doc,
            application_id: applicationId,
        }));
        return await ApplicationDocument.bulkCreate(records);
    }
}

export default new ApplicationDocumentService();

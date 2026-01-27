import educationService from "../services/education.service.js";

class EducationController {
    // POST /educations
    async create(req, res) {
        try {
            const education = await educationService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Education record created successfully",
                data: education,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /educations
    async findAll(req, res) {
        try {
            const educations = await educationService.findAll();
            return res.status(200).json({
                success: true,
                data: educations,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /educations/candidate/:candidateId
    async findByCandidateId(req, res) {
        try {
            const { candidateId } = req.params;
            const educations = await educationService.findByCandidateId(candidateId);
            return res.status(200).json({
                success: true,
                data: educations,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /educations/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const education = await educationService.findById(id);

            if (!education) {
                return res.status(404).json({
                    success: false,
                    message: "Education record not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                data: education,
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /educations/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const education = await educationService.update(id, req.body);

            if (!education) {
                return res.status(404).json({
                    success: false,
                    message: "Education record not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Education record updated successfully",
                data: education,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /educations/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await educationService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Education record not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Education record deleted successfully",
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

export default new EducationController();

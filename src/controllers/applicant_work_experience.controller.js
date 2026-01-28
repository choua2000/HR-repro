import applicantWorkExperienceService from "../services/applicant_work_experience.service.js";

class ApplicantWorkExperienceController {
    // POST /work-experiences
    async create(req, res) {
        try {
            const workExperience = await applicantWorkExperienceService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Work experience record created successfully",
                data: workExperience,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /work-experiences
    async findAll(req, res) {
        try {
            const workExperiences = await applicantWorkExperienceService.findAll();
            return res.status(200).json({
                success: true,
                data: workExperiences,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /work-experiences/application/:applicationId
    async findByApplicationId(req, res) {
        try {
            const { applicationId } = req.params;
            const workExperiences = await applicantWorkExperienceService.findByApplicationId(applicationId);
            return res.status(200).json({
                success: true,
                data: workExperiences,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /work-experiences/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const workExperience = await applicantWorkExperienceService.findById(id);

            if (!workExperience) {
                return res.status(404).json({
                    success: false,
                    message: "Work experience record not found",
                });
            }

            return res.status(200).json({
                success: true,
                data: workExperience,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /work-experiences/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const workExperience = await applicantWorkExperienceService.update(id, req.body);

            if (!workExperience) {
                return res.status(404).json({
                    success: false,
                    message: "Work experience record not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Work experience record updated successfully",
                data: workExperience,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /work-experiences/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await applicantWorkExperienceService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Work experience record not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Work experience record deleted successfully",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

export default new ApplicantWorkExperienceController();

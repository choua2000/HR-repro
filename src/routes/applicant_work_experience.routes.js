import express from "express";
import applicantWorkExperienceController from "../controllers/applicant_work_experience.controller.js";

const router = express.Router();

router.post("/", applicantWorkExperienceController.create);
router.get("/", applicantWorkExperienceController.findAll);
router.get("/application/:applicationId", applicantWorkExperienceController.findByApplicationId);
router.get("/:id", applicantWorkExperienceController.findById);
router.put("/:id", applicantWorkExperienceController.update);
router.delete("/:id", applicantWorkExperienceController.delete);

export default router;

import express from "express";
import applicantEducationController from "../controllers/applicant_education.controller.js";

const router = express.Router();

router.post("/", applicantEducationController.create);
router.get("/", applicantEducationController.findAll);
router.get("/application/:applicationId", applicantEducationController.findByApplicationId);
router.get("/:id", applicantEducationController.findById);
router.put("/:id", applicantEducationController.update);
router.delete("/:id", applicantEducationController.delete);

export default router;

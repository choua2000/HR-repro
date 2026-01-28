import express from "express";
import applicantTrainingController from "../controllers/applicant_training.controller.js";

const router = express.Router();

router.post("/", applicantTrainingController.create);
router.get("/", applicantTrainingController.findAll);
router.get("/application/:applicationId", applicantTrainingController.findByApplicationId);
router.get("/:id", applicantTrainingController.findById);
router.put("/:id", applicantTrainingController.update);
router.delete("/:id", applicantTrainingController.delete);

export default router;

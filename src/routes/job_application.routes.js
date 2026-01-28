import express from "express";
import jobApplicationController from "../controllers/job_application.controller.js";

const router = express.Router();

router.post("/", jobApplicationController.create);
router.get("/", jobApplicationController.findAll);
router.get("/job/:jobId", jobApplicationController.findByJobId);
router.get("/:id", jobApplicationController.findById);
router.put("/:id", jobApplicationController.update);
router.patch("/:id/status", jobApplicationController.updateStatus);
router.delete("/:id", jobApplicationController.delete);

export default router;

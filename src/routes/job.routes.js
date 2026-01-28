import express from "express";
import jobController from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", jobController.create);
router.get("/", jobController.findAll);
router.get("/active", jobController.findAllActive);
router.get("/:id", jobController.findById);
router.get("/:id/applications", jobController.findByIdWithApplications);
router.put("/:id", jobController.update);
router.delete("/:id", jobController.delete);

export default router;

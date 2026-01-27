import express from "express";
import educationController from "../controllers/education.controller.js";

const router = express.Router();

router.post("/", educationController.create);
router.get("/", educationController.findAll);
router.get("/candidate/:candidateId", educationController.findByCandidateId);
router.get("/:id", educationController.findById);
router.put("/:id", educationController.update);
router.delete("/:id", educationController.delete);

export default router;

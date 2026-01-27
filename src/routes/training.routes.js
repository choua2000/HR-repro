import express from "express";
import trainingController from "../controllers/training.controller.js";

const router = express.Router();

router.post("/", trainingController.create);
router.get("/", trainingController.findAll);
router.get("/candidate/:candidateId", trainingController.findByCandidateId);
router.get("/:id", trainingController.findById);
router.put("/:id", trainingController.update);
router.delete("/:id", trainingController.delete);

export default router;

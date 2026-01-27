import express from "express";
import referenceController from "../controllers/reference.controller.js";

const router = express.Router();

router.post("/", referenceController.create);
router.get("/", referenceController.findAll);
router.get("/candidate/:candidateId", referenceController.findByCandidateId);
router.get("/:id", referenceController.findById);
router.put("/:id", referenceController.update);
router.delete("/:id", referenceController.delete);

export default router;

import express from "express";
import candidateController from "../controllers/candidate.controller.js";

const router = express.Router();

router.post("/", candidateController.create);
router.get("/", candidateController.findAll);
router.get("/details", candidateController.findAllWithDetails);
router.get("/:id", candidateController.findById);
router.get("/:id/details", candidateController.findByIdWithDetails);
router.put("/:id", candidateController.update);
router.delete("/:id", candidateController.delete);

export default router;

import express from "express";
import employmentHistoryController from "../controllers/employment_history.controller.js";

const router = express.Router();

router.post("/", employmentHistoryController.create);
router.get("/", employmentHistoryController.findAll);
router.get("/candidate/:candidateId", employmentHistoryController.findByCandidateId);
router.get("/:id", employmentHistoryController.findById);
router.put("/:id", employmentHistoryController.update);
router.delete("/:id", employmentHistoryController.delete);

export default router;

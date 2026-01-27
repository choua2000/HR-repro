import express from "express";
import applicationController from "../controllers/application.controller.js";

const router = express.Router();

router.post("/", applicationController.create);
router.get("/", applicationController.findAll);
router.get("/candidate/:candidateId", applicationController.findByCandidateId);
router.get("/vacancy/:vacancyId", applicationController.findByVacancyId);
router.get("/:id", applicationController.findById);
router.put("/:id", applicationController.update);
router.delete("/:id", applicationController.delete);

export default router;

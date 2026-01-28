import express from "express";
import applicationDocumentController from "../controllers/application_document.controller.js";

const router = express.Router();

router.post("/", applicationDocumentController.create);
router.get("/", applicationDocumentController.findAll);
router.get("/application/:applicationId", applicationDocumentController.findByApplicationId);
router.get("/:id", applicationDocumentController.findById);
router.put("/:id", applicationDocumentController.update);
router.delete("/:id", applicationDocumentController.delete);

export default router;

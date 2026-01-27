import express from "express";
import  vacancyController from "../controllers/vacancy.controller.js";



const router = express.Router();

router.post("/", vacancyController.create);
router.get("/", vacancyController.findAll);
router.get("/:id", vacancyController.findById);
router.put("/:id", vacancyController.update);
router.delete("/:id", vacancyController.delete);

export default router;

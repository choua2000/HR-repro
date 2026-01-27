import trainingService from "../services/training.service.js";

class TrainingController {
    // POST /trainings
    async create(req, res) {
        try {
            const training = await trainingService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Training record created successfully",
                data: training,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /trainings
    async findAll(req, res) {
        try {
            const trainings = await trainingService.findAll();
            return res.status(200).json({
                success: true,
                data: trainings,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /trainings/candidate/:candidateId
    async findByCandidateId(req, res) {
        try {
            const { candidateId } = req.params;
            const trainings = await trainingService.findByCandidateId(candidateId);
            return res.status(200).json({
                success: true,
                data: trainings,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // GET /trainings/:id
    async findById(req, res) {
        try {
            const { id } = req.params;
            const training = await trainingService.findById(id);

            if (!training) {
                return res.status(404).json({
                    success: false,
                    message: "Training record not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                data: training,
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }

    // PUT /trainings/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const training = await trainingService.update(id, req.body);

            if (!training) {
                return res.status(404).json({
                    success: false,
                    message: "Training record not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Training record updated successfully",
                data: training,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE /trainings/:id
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await trainingService.delete(id);

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Training record not found",
                });
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Training record deleted successfully",
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: error.message,
            });
        }
    }
}

export default new TrainingController();

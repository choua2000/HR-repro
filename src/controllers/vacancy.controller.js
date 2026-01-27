import vacancyService from "../services/vacancy.service.js";

class VacancyController {
  // POST /vacancies
  async create(req, res) {
    try {
      const vacancy = await vacancyService.create(req.body);
      return res.status(201).json({
        success: true,
        message: "Vacancy created successfully",
        data: vacancy,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  


  // GET /vacancies
  async findAll(req, res) {
    try {
      const vacancies = await vacancyService.findAll();
      return res.status(200).json({
        success: true,
        data: vacancies,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // GET /vacancies/:id
  async findById(req, res) {
    try {
      const { id } = req.params;
      const vacancy = await vacancyService.findById(id);

      if (!vacancy) {
        return res.status(404).json({
          success: false,
          message: "Vacancy not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: vacancy,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // PUT /vacancies/:id
  async update(req, res) {
    try {
      const { id } = req.params;
      const vacancy = await vacancyService.update(id, req.body);

      if (!vacancy) {
        return res.status(404).json({
          success: false,
          message: "Vacancy not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Vacancy updated successfully",
        data: vacancy,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // DELETE /vacancies/:id
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await vacancyService.delete(id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Vacancy not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Vacancy deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new VacancyController();

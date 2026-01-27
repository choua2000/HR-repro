import Vacancy from "../models/vacancy.model.js";

class VacancyService {
  // Create vacancy
  async create(data) {
    return await Vacancy.create(data);
  }

  // Get all vacancies
  async findAll() {
    return await Vacancy.findAll({
      order: [["createdAt", "DESC"]],
    });
  }

  // Get vacancy by UUID
  async findById(id) {
    return await Vacancy.findByPk(id);
  }

  // Update vacancy
  async update(id, data) {
    const vacancy = await Vacancy.findByPk(id);
    if (!vacancy) return null;

    await vacancy.update(data);
    return vacancy;
  }

  // Delete vacancy
  async delete(id) {
    const vacancy = await Vacancy.findByPk(id);
    if (!vacancy) return null;

    await vacancy.destroy();
    return true;
  }
}

export default new VacancyService();

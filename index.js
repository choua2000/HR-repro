import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Sequelize  from './src/config/db.js';
import vacancyRoutes from './src/routes/vacancy.routes.js';
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
app.use('/api/vacancies', vacancyRoutes);
const PORT = process.env.PORT;
Sequelize
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




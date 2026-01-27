import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { syncDatabase } from './src/models/index.js';

// Import routes
import vacancyRoutes from './src/routes/vacancy.routes.js';
import candidateRoutes from './src/routes/candidate.routes.js';
import educationRoutes from './src/routes/education.routes.js';
import trainingRoutes from './src/routes/training.routes.js';
import employmentHistoryRoutes from './src/routes/employment_history.routes.js';
import referenceRoutes from './src/routes/reference.routes.js';
import applicationRoutes from './src/routes/application.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

// Register routes
app.use('/api/vacancies', vacancyRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/educations', educationRoutes);
app.use('/api/trainings', trainingRoutes);
app.use('/api/employment-histories', employmentHistoryRoutes);
app.use('/api/references', referenceRoutes);
app.use('/api/applications', applicationRoutes);

const PORT = process.env.PORT || 3000;

// Sync database and start server
syncDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { syncDatabase } from './src/models/index.js';

// Import routes
import jobRoutes from './src/routes/job.routes.js';
import jobApplicationRoutes from './src/routes/job_application.routes.js';
import applicantEducationRoutes from './src/routes/applicant_education.routes.js';
import applicantTrainingRoutes from './src/routes/applicant_training.routes.js';
import applicantWorkExperienceRoutes from './src/routes/applicant_work_experience.routes.js';
import applicationDocumentRoutes from './src/routes/application_document.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

// Register routes
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', jobApplicationRoutes);
app.use('/api/educations', applicantEducationRoutes);
app.use('/api/trainings', applicantTrainingRoutes);
app.use('/api/work-experiences', applicantWorkExperienceRoutes);
app.use('/api/documents', applicationDocumentRoutes);

const PORT = process.env.PORT;

// Sync database and start server
syncDatabase().then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
});

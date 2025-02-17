import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
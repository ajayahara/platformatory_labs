import express from 'express';
import cors from 'cors';
import { PORT } from './config/config';
import { connection } from './db/db';
import { userRouter } from './route/userRoute';
import { Response } from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.get('/health', (_, res: Response) => {
  try {
    res.status(200).json({ message: 'Hi from server.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});
app.use('/api/user', userRouter);

app.listen(PORT || 5000, async () => {
  try {
    await connection;
    console.log('Connected to DB.\nServer is running.');
  } catch (error) {
    console.log(error);
  }
});

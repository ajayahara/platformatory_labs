import mongoose from 'mongoose';
import { MONGO_URI } from '../config/config';
export const connectDB = async () => {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(MONGO_URI!);
  }
};
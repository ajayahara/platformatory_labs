import mongoose from 'mongoose';
import { MONGO_URI } from '../config/config';
export const connection = mongoose.connect(MONGO_URI || '');

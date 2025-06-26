import dotenv from 'dotenv';
dotenv.config();
const { PORT, MONGO_URI, CRUD_URL } = process.env;
export { PORT, MONGO_URI, CRUD_URL };

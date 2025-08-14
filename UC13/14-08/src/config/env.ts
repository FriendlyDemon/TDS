import dotenv from "dotenv";

dotenv.config();

export const env = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  PORT: Number(process.env.PORT) || 3000,
};

import pg from "pg";
import {
  // DB_DATABASE,
  // DB_HOST,
  // DB_PASSWORD,
  // DB_PORT,
  // DB_USER,
  DATABASE_URL,
} from "./config.js";

export const pool = new pg.Pool({
  // user: DB_USER,
  // host: DB_HOST,
  // password: DB_PASSWORD,
  // database: DB_DATABASE,
  // port: DB_PORT,

  // Ajustes para Serverless:
  connectionString: DATABASE_URL,
  max: 1, // Limita a 1 conexión por cada función lambda
  idleTimeoutMillis: 30000, // Cierra conexiones inactivas tras 30s
  connectionTimeoutMillis: 2000, // No esperes demasiado si la DB está saturada
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

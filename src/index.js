import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/users.routes.js";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// 1. Definir __dirname primero
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 2. INICIALIZAR la app (Esto debe ir antes de usar app.use)
const app = express();

// 3. Configurar Middlewares y archivos estáticos
app.use(morgan("dev"));
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "../public")));

// 4. Rutas de la API
app.use(userRoutes);

// 5. Encendido del servidor
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log("SERVIDOR EN PUERTO: ", PORT);
  });
}

export default app;

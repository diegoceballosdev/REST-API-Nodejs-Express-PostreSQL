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
app.use(express.static(path.join(process.cwd(), "public")));

// 4. Rutas de la API
app.use(userRoutes);

// Esto se ejecutará para cualquier ruta que NO haya sido capturada por userRoutes
app.use((req, res, next) => {
  // Solo servimos el HTML si es una petición GET (para no romper posibles errores de POST)
  if (req.method === "GET") {
    return res.sendFile(path.join(process.cwd(), "public", "index.html"));
  }
  next();
});

// 5. Encendido del servidor
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log("SERVIDOR EN PUERTO: ", PORT);
  });
}

export default app;

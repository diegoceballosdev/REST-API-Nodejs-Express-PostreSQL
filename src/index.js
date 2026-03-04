import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/users.routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);

// Solo iniciamos el servidor manualmente si NO estamos en Vercel
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log("SERVIDOR EN PUERTO: ", PORT);
  });
}

// ESTO ES LO MÁS IMPORTANTE PARA VERCEL:
export default app;

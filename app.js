// app.js
import express from "express";
import alimentoRoutes from "./routes/alimento.routes.js";

const app = express();

app.use(express.json());
app.use("/alimentos", alimentoRoutes);

export default app;


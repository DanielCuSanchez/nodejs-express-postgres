import express from "express";

import morgan from "morgan";

//Importing routes
import projectRoutes from "./routes/projects";
import taskRoutes from "./routes/tasks";

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

export default app;

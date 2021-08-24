import { Router } from "express";
import {
  createProject,
  deleteOneProject,
  getOneProject,
  getProjects,
  updateOneProject,
} from "../controllers/project.controller";

const router = Router();
// /api/projects
router.get("/", getProjects);
router.get("/:id", getOneProject);
router.post("/", createProject);
router.delete("/:id", deleteOneProject);
router.put("/:id", updateOneProject);
export default router;

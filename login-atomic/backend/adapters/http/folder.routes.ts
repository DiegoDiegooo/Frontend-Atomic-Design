import { Router } from "express";
import { FolderController } from "./folder.controller";

const router = Router();

// POST /folders
router.post("/", FolderController.create);

// GET /folders
router.get("/", FolderController.getAll);



export default router;

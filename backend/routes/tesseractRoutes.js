import express from "express";
import { parseDocument } from "../controllers/tesseractController.js";

const tesseractRouter = express.Router();

tesseractRouter.post("/parse", parseDocument);

export default tesseractRouter;
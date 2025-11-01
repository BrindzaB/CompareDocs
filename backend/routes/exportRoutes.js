import express from "express";
import { exportComparisonPDF } from "../controllers/exportController.js";

const exportRouter = express.Router();

exportRouter.post("/download", exportComparisonPDF);

export default exportRouter;
import express from "express";
import { welcome, compare } from "../controllers/ollamaController.js";

const ollamaRouter = express.Router();

ollamaRouter.get("/", welcome);
ollamaRouter.post("/compare", compare);

export default ollamaRouter;

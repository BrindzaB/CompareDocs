import express from "express";
import {compare} from "../controllers/ollamaController.js";

const ollamaRouter = express.Router();

ollamaRouter.post("/compare", compare);


export default ollamaRouter;

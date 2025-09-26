import express from "express";
import { parseAndRecognizeInvoicesData } from "../controllers/invoiceController.js";

const invoiceRouter = express.Router();

invoiceRouter.post("/process", parseAndRecognizeInvoicesData);

export default invoiceRouter;

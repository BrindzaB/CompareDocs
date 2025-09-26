import express from "express";
import { parseAndRecognizeInvoicesDate } from "../controllers/invoiceController.js";

const invoiceRouter = express.Router();

invoiceRouter.post("/compare", parseAndRecognizeInvoicesDate);

export default invoiceRouter;

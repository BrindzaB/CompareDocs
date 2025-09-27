import express from "express";
import { compareInvoices, parseAndRecognizeInvoiceData } from "../controllers/invoiceController.js";

const invoiceRouter = express.Router();

invoiceRouter.post("/process", parseAndRecognizeInvoiceData);
invoiceRouter.post("/compare", compareInvoices);

export default invoiceRouter;

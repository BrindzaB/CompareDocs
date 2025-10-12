import express from "express";
import { compareInvoices, dummyResponse, parseAndRecognizeInvoiceData } from "../controllers/invoiceController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const invoiceRouter = express.Router();

invoiceRouter.post("/process", upload.fields([
    {name: "invoice1", maxCount: 1},
    {name: "invoice2", maxCount: 1}
]), parseAndRecognizeInvoiceData);

invoiceRouter.post("/upload", upload.fields([
    {name: "invoice1", maxCount: 1},
    {name: "invoice2", maxCount: 1}
]), compareInvoices);

invoiceRouter.post("/test", dummyResponse);
invoiceRouter.post("/compare", compareInvoices);

export default invoiceRouter;

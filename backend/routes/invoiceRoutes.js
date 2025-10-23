import express from "express";
import { compareInvoices } from "../controllers/invoiceController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const invoiceRouter = express.Router();

invoiceRouter.post("/upload", upload.fields([
    {name: "invoice1", maxCount: 1},
    {name: "invoice2", maxCount: 1}
]), compareInvoices);


export default invoiceRouter;

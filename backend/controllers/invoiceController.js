import multer from "multer";
import { processInvoice } from "../services/invoiceService.js";
import { compareDocumentsGPT } from "../services/openaiService.js";

export const compareInvoices = async (req, res) => {
    try {
        const lang = req.body.lang || "ENG";

        if (!req.files || !req.files.invoice1 || !req.files.invoice2) {
            return res.status(400).json({error: "Two invoice files are required"});
        }

        const doc1Path = req.files.invoice1[0].path;
        const doc2Path = req.files.invoice2[0].path;

        const invoice1 = await processInvoice(doc1Path, lang);
        const invoice2 = await processInvoice(doc2Path, lang);

        const result = await compareDocumentsGPT(invoice1, invoice2);
        res.json({invoice1, invoice2, result, doc1Path, doc2Path});

    } catch (error) {
        console.error(error);

        if (error instanceof multer.MulterError) {
            if (error.code === "LIMIT_FILE_SIZE") {
                return res.status(400).json({error: "File size exceeds 10MB limit"});
            }
            return res.status(400).json({error: error.message});
        }

        res.status(500).json({error: "Failed to compare invoices"});
    }
}
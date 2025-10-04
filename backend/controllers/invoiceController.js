import { processInvoice } from "../services/invoiceService.js";
import { compareDocumentsGPT } from "../services/openaiService.js";

export const parseAndRecognizeInvoiceData = async (req, res) => {
    try {
        const lang = req.body.lang || "ENG";
        const filePath = req.file.path;

        const invoiceData = await processInvoice(filePath, lang);

        res.json(invoiceData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to parse and recognize data" });
    }
};

export const compareInvoices = async (req, res) => {
    try {
        const lang = req.body.lang || "ENG";

        if (!req.files || !req.files.invoice1 || !req.files.invoice2) {
            return res.status(400).json({error: "Two invoice files are required"});
        }

        const filePath1 = req.files.invoice1[0].path;
        const filePath2 = req.files.invoice2[0].path;

        const invoice1 = await processInvoice(filePath1, lang);
        const invoice2 = await processInvoice(filePath2, lang);

        const result = await compareDocumentsGPT(invoice1, invoice2);
        res.json({invoice1, invoice2, result});

    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to compare invoices"});
    }
}
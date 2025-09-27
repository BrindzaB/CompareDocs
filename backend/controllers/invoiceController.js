import { processInvoice } from "../services/invoiceService.js";
import { compareDocumentsGPT } from "../services/openaiService.js";

export const parseAndRecognizeInvoiceData = async (req, res) => {
    try {
        const { fileName, lang } = req.body;
        const filePath = `./documents/${fileName}`;

        const invoiceData = await processInvoice(filePath, lang);

        res.json(invoiceData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to parse and recognize data" });
    }
};

export const compareInvoices = async (req, res) => {
    try {
        const {fileName1, fileName2, lang} = req.body;

        const invoice1 = await processInvoice(`./documents/${fileName1}`, lang);
        const invoice2 = await processInvoice(`./documents/${fileName2}`, lang);

        const result = await compareDocumentsGPT(invoice1, invoice2);
        res.json({invoice1, invoice2, result});

    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to compare invoices"});
    }
}
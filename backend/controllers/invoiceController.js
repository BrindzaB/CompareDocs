import { extractTextFromDocument } from "../services/tesseractService.js";
import { recognizeData } from "../services/ollamaService.js";

export const parseAndRecognizeInvoicesData = async (req, res) => {
    try {
        const { fileName, lang } = req.body;

        const path = `./documents/${fileName}`;
        const parsedText = await extractTextFromDocument(path, lang);
        const deadline = await recognizeData(parsedText, "deadline", lang);
        const amount = await recognizeData(parsedText, "amount", lang);
        const issued = await recognizeData(parsedText, "issued", lang);

        res.json({deadline, amount, issued});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to parse and recognize data" });
    }
};

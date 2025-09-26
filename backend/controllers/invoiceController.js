import { extractTextFromDocument } from "../services/tesseractService.js";
import { recognizeData } from "../services/ollamaService.js";

export const parseAndRecognizeInvoicesDate = async (req, res) => {
    try {
        const {fileName, lang} = req.body;

        const path = `./documents/${fileName}`
        const parsedText = await extractTextFromDocument(path, lang);
        const data = await recognizeData(parsedText, lang);

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to parse and recognize data"});
    }
};
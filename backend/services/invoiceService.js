import { extractTextFromDocument } from "../services/tesseractService.js";
import { recognizeDataGPT } from "./openaiService.js";

export async function processInvoice(filePath, lang = "ENG") {
        const parsedText = await extractTextFromDocument(filePath, lang);
        const fields = await recognizeDataGPT(parsedText);
        return fields;
}
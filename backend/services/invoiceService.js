import { extractTextFromDocument } from "../services/tesseractService.js";
import { recognizeDataGPT } from "./openaiService.js";

export async function processInvoice(filePath, lang = "ENG") {
        const parsedText = await extractTextFromDocument(filePath, lang);
        const deadline = await recognizeDataGPT(parsedText, "paymentDeadline");
        const amount = await recognizeDataGPT(parsedText, "totalGross");
        const issued = await recognizeDataGPT(parsedText, "invoiceDate");

        return { deadline, amount, issued };
}
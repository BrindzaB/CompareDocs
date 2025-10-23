import { extractTextFromImage } from "./tesseractService.js";
import { recognizeDataGPT } from "./openaiService.js";
import {
    isPdf,
    isScannedPdf,
    convertPdfToImage,
    extractTextFromPdf,
} from "./pdfService.js";

export async function processInvoice(filePath, lang = "ENG") {
    let parsedText;

    if (isPdf(filePath)) {
        if (await isScannedPdf(filePath)) {
            const imagePath = await convertPdfToImage(filePath);
            parsedText = await extractTextFromImage(imagePath, lang);
        } else {
            parsedText = await extractTextFromPdf(filePath);
        }
    } else {
        parsedText = await extractTextFromImage(filePath, lang);
    }

    const fields = await recognizeDataGPT(parsedText);
    return fields;
}

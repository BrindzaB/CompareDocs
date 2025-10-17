import { extractTextFromDocument } from "./tesseractService.js";
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
            console.log("Processing scanned PDF with OCR...");
            const imagePath = await convertPdfToImage(filePath);
            parsedText = await extractTextFromDocument(imagePath, lang);
        } else {
            console.log("Extracting text from digital PDF...");
            parsedText = await extractTextFromPdf(filePath);
        }
    } else {
        console.log("Processing image with OCR...");
        parsedText = await extractTextFromDocument(filePath, lang);
    }
    
    // const fields = await recognizeDataGPT(parsedText);
    // return fields;
}

import Tesseract from "tesseract.js";


export async function extractTextFromDocument(docPath) {

    try {
        const data = await Tesseract.recognize(docPath, "hun");
        return data;
    } catch (error) {
        throw new Error("OCR failed: " + error.message);
    }

}
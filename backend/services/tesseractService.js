import Tesseract from "tesseract.js";


export async function extractTextFromDocument(docPath, lang = "eng") {

    try {
        const {data: {text}} = await Tesseract.recognize(docPath, lang.toLowerCase());
        return text;
    } catch (error) {
        throw new Error("OCR failed: " + error.message);
    }

}
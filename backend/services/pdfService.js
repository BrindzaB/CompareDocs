import pdfParse from "pdf-parse";
import { fromPath } from "pdf2pic";
import fs from "fs/promises";
import path from "path";

export async function extractTextFromPdf(pdfPath) {
    try {
        const dataBuffer = await fs.readFile(pdfPath);
        const data = await pdfParse(dataBuffer);
        return data.text;
    } catch (error) {
        throw new Error("PDF text extraction failed: " + error.message);
    }
}

export async function convertPdfToImage(pdfPath) {
    try {
        const options = {
            density: 300,
            saveFilename: `temp_${Date.now()}`,
            savePath: "./temp",
            format: "png",
            width: 2480,
            height: 3508,
        };

        const convert = fromPath(pdfPath, options);
        const result = await convert(1);
        return result.path;
    } catch (error) {
        throw new Error("PDF to image conversion failed: " + error.message);
    }
}

export function isPdf(filePath) {
    return path.extname(filePath).toLowerCase() === ".pdf";
}

export async function isScannedPdf(pdfPath) {
    const text = await extractTextFromPdf(pdfPath);
    return text.trim().length < 100;
}

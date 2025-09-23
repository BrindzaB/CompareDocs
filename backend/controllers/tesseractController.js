import { extractTextFromDocument } from "../services/tesseractService.js"

export const parseDocument = async (req, res) => {
    try {
        const {fileName} = req.body;

        if (!fileName) {
            return res.status(400).json({error:"Filename is required"});
        }

        const filePath = `./documents/${fileName}`;

        const text = await extractTextFromDocument(filePath);
        res.json(text);

    } catch (error) {
        res.status(500).json({error: "Failed to parse document"});
    }
}
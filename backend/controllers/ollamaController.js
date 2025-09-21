import { compareDocuments, generateWelcome } from "../services/ollamaService.js";

export const welcome = async (req, res) => {
    try {

        const result = await generateWelcome();
        res.json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Failed to generate message from Ollama",
        });
    }
};

export const compare = async (req, res) => {

    const {doc1, doc2} = req.body;
    
    if (!doc1 || !doc2) {
        return res.status(400).json({error: "doc1 and doc2 are required in request body"});
    }

    try {
        const result = await compareDocuments(doc1, doc2);
        res.json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Failed to compare documents using Ollama"});
    }
};

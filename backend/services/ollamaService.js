import ollama from "ollama";
import { buildPrompt } from "../utils/promptLoader.js";

export async function compareDocuments(doc1, doc2) {
    const prompt = buildPrompt("compare", {
        doc1: JSON.stringify(doc1),
        doc2: JSON.stringify(doc2),
    });

    return await ollama.generate({
        model: "llama3.1:8b",
        prompt: prompt
    });
}
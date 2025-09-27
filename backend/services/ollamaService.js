import ollama from "ollama";
import { buildPrompt } from "../utils/promptLoader.js";

export async function recognizeDataOllama(parsedText, field) {
    const promptName = `recognize.${field}`;
    const prompt = await buildPrompt(promptName, { invoice: parsedText });

    const response = await ollama.generate({
        model: "llama3.1:8b",
        prompt,
    });
    return response.response;
}

export async function compareDocumentsOllama(doc1, doc2) {
    const prompt = await buildPrompt("compare", {
        doc1: JSON.stringify(doc1),
        doc2: JSON.stringify(doc2),
    });

    const result = await ollama.generate({
        model: "llama3.1:8b",
        prompt: prompt,
    });

    return result.response;
}

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

export async function recognizeData(parsedText, lang = "HUN") {
    const promptName = `recognize.deadline.${lang}`;
    const prompt = buildPrompt(promptName, {invoice: parsedText});

    return await ollama.generate({
        model: "llama3.1:8b",
        prompt
    });
}
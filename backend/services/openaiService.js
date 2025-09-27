import OpenAI from "openai";
import { buildPrompt } from "../utils/promptLoader.js";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function recognizeDataGPT(parsedText, field){
    const promptName = `recognize/${field}`;
    const prompt = await buildPrompt(promptName, {invoice: parsedText});

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are a strict extractor of invoice fields"},
            { role: "user", content: prompt},
        ],
        temperature: 0,
    });

    return response.choices[0].message.content.trim();
}

export async function compareDocumentsGPT(doc1, doc2) {
    const prompt = await buildPrompt("compare", {
        invoice1: JSON.stringify(doc1),
        invoice2: JSON.stringify(doc2),
    });

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: "You are a strict comparator of invoice data"},
            {role: "user", content: prompt},
        ],
        temperature: 0,
    });

    return response.choices[0].message.content.trim();
}
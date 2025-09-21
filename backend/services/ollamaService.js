import ollama from "ollama";

export async function generateWelcome() {
    return await ollama.generate({
            model: "llama3.1:8b",
            prompt: "Write a short welcome message",
            system: "Respond with only the message text, no introduction",
    });
}



export async function compareDocuments(doc1, doc2) {
    const prompt = 
    `Compare the following two JSON objects. 
    Rules:
    - Treat lowercase/uppercase differences as equal.
    - Treat company names with or without punctuation as the same (e.g. "ACME Ltd" = "acme ltd.").
    - Treat numbers like 10 and 10.0 as equal if they are numerically the same.
    Document 1: ${JSON.stringify(doc1)}
    Document 2: ${JSON.stringify(doc2)}
    Response ONLY with "EQUALS" or "NOT EQUALS", no introduction. If "not equals" add the name of the key where difference was found`

    return await ollama.generate({
        model: "llama3.1:8b",
        prompt: prompt
    });
}
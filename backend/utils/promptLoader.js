import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const promptsPath = path.join(__dirname, "../prompts/prompts.json");

let prompts = {};

try {
    const data = await fs.readFile(promptsPath, "utf-8");
    prompts = JSON.parse(data);
} catch (error) {
    console.error("Failed to load prompts.json", error);
}

export function buildPrompt(name, vars = {}) {
    const keys = name.split(".");
    let template = prompts;

    for (const key of keys) {
        template = template?.[key];
        if (!template) throw new Error(`Prompt "${name}" not found`);
    }
    
    return template.replace(/{{(\w+)}}/g, (_, key) => {
        return vars[key] ?? "";
    });
}
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const promptsDir = path.join(__dirname, "../prompts");

export async function buildPrompt(name, vars = {}) {
    const parts = name.split(".");
    const filePath = path.join(promptsDir, ...parts) + ".txt";

    let template;
    try {
        template = await fs.readFile(filePath, "utf-8");
    } catch (error) {
        throw new Error(`Prompt file "${filePath}" not found`);
    }

    return template.replace(/{{(\w+)}}/g, (_, key) => {
        return vars[key] ?? "";
    });
}
import express from "express";
import ollamaRouter from "./routes/ollamaRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.use("/api/ollama", ollamaRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

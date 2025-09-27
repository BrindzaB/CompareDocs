import "dotenv/config";
import express from "express";
import ollamaRouter from "./routes/ollamaRoutes.js";
import tesseractRouter from "./routes/tesseractRoutes.js";
import invoiceRouter from "./routes/invoiceRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.use("/api/ollama", ollamaRouter);
app.use("/api/tesseract", tesseractRouter);
app.use("/api/invoices", invoiceRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import "dotenv/config";
import express from "express";
import invoiceRouter from "./routes/invoiceRoutes.js";
import fs from "fs";
import { cleanupTempFiles } from "./utils/fileCleanup.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.use("/api/invoices", invoiceRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if (!fs.existsSync("./documents")) {
  fs.mkdirSync("./documents");
}

if (!fs.existsSync("./temp")) {
  fs.mkdirSync("./temp");
}

setInterval(cleanupTempFiles, 3600000);
cleanupTempFiles();

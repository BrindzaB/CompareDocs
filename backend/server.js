import "dotenv/config";
import express from "express";
import invoiceRouter from "./routes/invoiceRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.use("/api/invoices", invoiceRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

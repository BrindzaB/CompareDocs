import fs from "fs/promises";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import path from "path";

export const exportComparisonPDF = async (req, res) => {
  try {
    
    const { result, doc1Path, doc2Path } = req.body;
    
    if (!result) return res.status(400).json({ error: "Missing result object in body" });

    const { invoice1 = {}, invoice2 = {}, result: matchResult = "UNKNOWN" } = result;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const { height } = page.getSize();

    let y = height - 50;

    page.drawText("Document Comparison Summary", { x: 50, y, size: 20, font, color: rgb(0, 0, 0) });

    y -= 40;
    page.drawText(`Comparison Result: ${matchResult}`, {
      x: 50,
      y,
      size: 16,
      font,
      color: matchResult === "MATCHING" ? rgb(0, 0.6, 0) : rgb(0.9, 0, 0),
    });

    y -= 40;
    page.drawText("First Document", { x: 50, y, size: 14, font });
    y -= 20;
    page.drawText(`Company: ${invoice1.companyName || "N/A"}`, { x: 70, y, size: 12, font });
    y -= 20;
    page.drawText(`Date: ${invoice1.invoiceDate || "N/A"}`, { x: 70, y, size: 12, font });
    y -= 20;
    page.drawText(`Total: ${invoice1.totalGross || "N/A"} ${invoice1.currency || ""}`, { x: 70, y, size: 12, font });

    y -= 40;
    page.drawText("Second Document", { x: 50, y, size: 14, font });
    y -= 20;
    page.drawText(`Company: ${invoice2.companyName || "N/A"}`, { x: 70, y, size: 12, font });
    y -= 20;
    page.drawText(`Date: ${invoice2.invoiceDate || "N/A"}`, { x: 70, y, size: 12, font });
    y -= 20;
    page.drawText(`Total: ${invoice2.totalGross || "N/A"} ${invoice2.currency || ""}`, { x: 70, y, size: 12, font });

    const addDocumentToPDF = async (filePath) => {
      if (!filePath) return;

      
      const safePath = path.join(process.cwd(), filePath);
      let fileBuffer;
      try {
        fileBuffer = await fs.readFile(safePath);
      } catch (err) {
        console.warn(`Attachment not found at ${safePath}, skipping.`);
        return;
      }

      const ext = path.extname(safePath).toLowerCase();

      if (ext === ".pdf") {
        const otherDoc = await PDFDocument.load(fileBuffer);
        const copiedPages = await pdfDoc.copyPages(otherDoc, otherDoc.getPageIndices());
        copiedPages.forEach((p) => pdfDoc.addPage(p));
      } else if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        const img = ext === ".png" ? await pdfDoc.embedPng(fileBuffer) : await pdfDoc.embedJpg(fileBuffer);
        
        const maxWidth = 550;
        const scale = Math.min(1, maxWidth / img.width);
        const w = img.width * scale;
        const h = img.height * scale;
        const imgPage = pdfDoc.addPage([w, h]);
        imgPage.drawImage(img, { x: 0, y: 0, width: w, height: h });
      } else {
        console.warn(`Unsupported ext ${ext} for ${safePath}, skipping.`);
      }
    };

    await addDocumentToPDF(doc1Path);
    await addDocumentToPDF(doc2Path);

    const pdfBytes = await pdfDoc.save();
    const pdfBuffer = Buffer.from(pdfBytes);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="comparison-result.pdf"');
    return res.send(pdfBuffer);
  } catch (error) {
    console.error("exportComparisonPDF error:", error);
    return res.status(500).json({ error: "Failed to generate export PDF" });
  }
};

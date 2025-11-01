import fs from "fs/promises";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import path from "path";


export const generateComparisonPDF = async ({ result, docPaths = [] }) => {
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

  const drawInvoice = (title, invoice) => {
    nonDefaultY(-40);
    page.drawText(title, { x: 50, y, size: 14, font });
    nonDefaultY(-20);
    page.drawText(`Company: ${invoice.companyName || "N/A"}`, { x: 70, y, size: 12, font });
    nonDefaultY(-20);
    page.drawText(`Date: ${invoice.invoiceDate || "N/A"}`, { x: 70, y, size: 12, font });
    nonDefaultY(-20);
    page.drawText(`Total: ${invoice.totalGross || "N/A"} ${invoice.currency || ""}`, { x: 70, y, size: 12, font });
  };

  const nonDefaultY = (delta) => { y += delta; };

  drawInvoice("First Document", invoice1);
  drawInvoice("Second Document", invoice2);

  for (const docPath of docPaths) {
    await addDocumentToPDF(pdfDoc, docPath);
  }

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
};


const addDocumentToPDF = async (pdfDoc, filePath) => {
  if (!filePath) return;

  const safePath = path.join(process.cwd(), filePath);
  let fileBuffer;
  try {
    fileBuffer = await fs.readFile(safePath);
  } catch {
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

import { generateComparisonPDF } from "../services/exportService.js";

export const exportComparisonPDF = async (req, res) => {
  try {
    const { result, doc1Path, doc2Path } = req.body;
    if (!result) return res.status(400).json({ error: "Missing result object in body" });

    const pdfBuffer = await generateComparisonPDF({
      result,
      docPaths: [doc1Path, doc2Path],
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="comparison-result.pdf"');
    res.send(pdfBuffer);
    
  } catch (error) {
    console.error("exportComparisonPDF error:", error);
    res.status(500).json({ error: "Failed to generate export PDF" });
  }
};

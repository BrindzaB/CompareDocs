
export async function downloadComparisonPDF(result) {
  try {
    const response = await fetch("/api/export/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        result,
        doc1Path: result?.doc1Path,
        doc2Path: result?.doc2Path,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to export PDF: ${errorText}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "comparison-result.pdf";
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error("PDF download failed:", error);
    throw error;
  }
}
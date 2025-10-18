export async function compareUploadedFiles(formData) {
    try {
        const response = await fetch("/api/invoices/upload", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        throw new Error("Failed to upload or compare invoices" + error.message);
    }
}
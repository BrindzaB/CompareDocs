import { downloadComparisonPDF } from "../fetch/exportFetching";
import ResultCard from "./ResultCards";
import { useState } from "react";


function ResultPage({ result, onReset}) {

    const doc1 = result?.invoice1 || {};
    const doc2 = result?.invoice2 || {};
    const match = result?.result || {};
    
    const [downloading, setDownloading] = useState(false);

    async function handleDownload() {
        setDownloading(true);
        try {
            await downloadComparisonPDF(result);
        } catch (error) {
            console.error("Failed to export PDF", error);
        } finally {
            setDownloading(false);
        }
    }


    return (
        <div className="flex flex-col items-center w-full px-10 sm:px-10 lg:px-20 pt-10 pb-20 lg:py-5 bg-transparent min-h-[calc(100vh-4rem)] gap-15">
            <div className="flex items-center justify-center pt-10 text-center">
                {match === "MATCHING" ? (
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white">Documents are <span className="text-green-400">MATCHING</span></h1>
                ): (
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white">Documents are <span className="text-red-400">NOT MATCHING</span></h1>
                )}
            </div>
            <div className="w-full flex flex-col xl:flex-row items-center justify-evenly gap-20 lg:gap-10">
                <ResultCard 
                    title="First Document" 
                    companyName={doc1.companyName} 
                    invoiceDate={doc1.invoiceDate}
                    totalAmount={doc1.totalGross}
                    currency={doc1.currency}
                />
                <ResultCard 
                    title="Second Document" 
                    companyName={doc2.companyName} 
                    invoiceDate={doc2.invoiceDate}
                    totalAmount={doc2.totalGross}
                    currency={doc2.currency}
                />
            </div>
            <div className="flex justify-center">
                <button 
                onClick={onReset}
                className="px-8 py-3 text-white bg-gray-900 dark:bg-darkgrey hover:bg-gray-800 rounded-full text-lg font-medium transition-transform duration-200 ease-in-out transform hover:scale-105 dark:border dark:border-gray-600"
                >
                Compare New Documents
                </button>
                <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className={`px-8 py-3 ml-4 rounded-full text-lg font-medium transition-transform duration-200 ease-in-out transform hover:scale-105 ${
                        downloading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "text-white bg-gradient-to-r from-purple-500 via-orange-400 to-red-400 dark:from-purple-500 dark:via-orange-500 dark:to-red-500"
                    }`}
                    >
                    {downloading ? "Generating PDF..." : "Download Result as PDF"}
                </button>
            </div>
        </div>
    );
}

export default ResultPage;

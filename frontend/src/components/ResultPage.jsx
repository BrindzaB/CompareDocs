import ResultCard from "./ResultCards";


function ResultPage({ result, onReset}) {

    const doc1 = result?.invoice1 || {};
    const doc2 = result?.invoice2 || {};
    const match = result?.result || {};

    return (
        <div className="pt-20 pb-10 w-full min-h-screen flex flex-col bg-white overflow-y-auto justify-evenly">
            <div className="py-10 flex items-center justify-center">
                {match === "MATCHING" ? (
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">Documents are <span className="text-green-400">MATCHING</span></h1>
                ): (
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">Documents are <span className="text-red-400">NOT MATCHING</span></h1>
                )}
            </div>
            <div className="w-full flex flex-col xl:flex-row items-center justify-evenly gap-10">
                <ResultCard 
                    title="First Document" 
                    paymentDate={doc1.paymentDeadline} 
                    invoiceDate={doc1.invoiceDate}
                    totalAmount={doc1.totalGross}
                />
                <ResultCard 
                    title="Second Document" 
                    paymentDate={doc2.paymentDeadline} 
                    invoiceDate={doc2.invoiceDate}
                    totalAmount={doc2.totalGross}
                />
            </div>
            <div className="flex justify-center mt-10">
                <button 
                onClick={onReset}
                className="px-8 py-3 text-white bg-gray-900 hover:bg-gray-800 rounded-full text-lg font-medium transition-transform duration-200 ease-in-out transform hover:scale-105"
                >
                Compare New Documents
                </button>
            </div>
        </div>
    );
}

export default ResultPage;

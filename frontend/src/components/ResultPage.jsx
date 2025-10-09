import ResultCard from "./ResultCards";


function ResultPage() {
    return (
        <div className="pt-20 pb-10 w-full min-h-screen flex flex-col bg-white overflow-y-auto justify-evenly">
            <div className="py-20 flex items-center justify-center">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">Matching documents</h1>
            </div>
            <div className="w-full flex flex-col xl:flex-row items-center justify-evenly gap-10">
                <ResultCard title="First Document" attributeName1="Payment date" attributeName2="Invoice date" attributeName3="Total amount"/>
                <ResultCard title="Second Document" attributeName1="Payment date" attributeName2="Invoice date" attributeName3="Total amount"/>
            </div>
        </div>
    );
}

export default ResultPage;

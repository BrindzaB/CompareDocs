import { useState } from "react";
import { compareUploadedFiles } from "../fetch/uploadFetching";

function UploadForm() {

    const [invoice1, setInvoice1] = useState(null);
    const [invoice2, setInvoice2] = useState(null);
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!invoice1 || !invoice2) {
            setError("You must upload two documents");
            return;
        }

        setError("");
        setResult(null);

        const formData = new FormData();
        formData.append("invoice1", invoice1);
        formData.append("invoice2", invoice2);
        formData.append("lang", "ENG");

        try {
            const data = await compareUploadedFiles(formData);
            setResult(data);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <form className="max-w-2/3 mx-auto h-full" onSubmit={handleSubmit}>
            {error && (
                <div className="text-red-500 text-center font-semibold mb-4">{error}</div>
            )}
            <div className="flex gap-20 h-full">
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="invoice1" className="flex flex-col items-center justify-center w-full h-128 border border-gray-300 rounded-lg shadow-sm cursor-pointer bg-white hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="invoice1" type="file" className="hidden" onChange={(e) => setInvoice1(e.target.files[0])}/>
                    </label>
                </div> 
                <div className="flex items-center justify-center">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Compare</button>
                </div>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="invoice2" className="flex flex-col items-center justify-center w-full h-128 border border-gray-300 rounded-lg shadow-sm cursor-pointer bg-white hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="invoice2" type="file" className="hidden" onChange={(e) => setInvoice2(e.target.files[0])} />
                    </label>
                </div> 
            </div>
        </form>
    )
}

export default UploadForm;
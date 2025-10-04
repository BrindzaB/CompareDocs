import { useState } from "react";
import { compareUploadedFiles } from "../fetch/uploadFetching";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faCheck } from "@fortawesome/free-solid-svg-icons";


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
                    {!invoice1 ? (
                        <label htmlFor="invoice1" className="flex flex-col items-center justify-center w-full h-128 border border-gray-300 rounded-lg shadow-sm cursor-pointer bg-white hover:bg-gray-100 transition-all">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <FontAwesomeIcon icon={faUpload} className="text-gray-500 text-2xl mb-2" />
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500">Upload a document</p>
                            </div>
                            <input id="invoice1" type="file" className="hidden" onChange={(e) => setInvoice1(e.target.files[0])}/>
                        </label>
                    ) : (
                        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center animate-scaleIn shadow-md">
                            <FontAwesomeIcon icon={faCheck} className="text-3xl text-white" />
                        </div>
                    )}
                </div> 
                <div className="flex items-center justify-center">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Compare</button>
                </div>
                <div className="flex items-center justify-center w-full">
                    {!invoice2 ? (
                        <label htmlFor="invoice2" className="flex flex-col items-center justify-center w-full h-128 border border-gray-300 rounded-lg shadow-sm cursor-pointer bg-white hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <FontAwesomeIcon icon={faUpload} className="text-gray-500 text-2xl mb-2" />
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500">Upload a document</p>
                            </div>
                            <input id="invoice2" type="file" className="hidden" onChange={(e) => setInvoice2(e.target.files[0])} />
                        </label>
                    ) : (
                        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center animate-scaleIn shadow-md">
                            <FontAwesomeIcon icon={faCheck} className="text-3xl text-white" />
                        </div>
                    )}
                </div> 
            </div>
        </form>
    )
}

export default UploadForm;
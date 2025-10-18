import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { compareUploadedFiles } from "../fetch/uploadFetching";
import FileInput from "./FileInput";



function UploadForm({onUploadStart, onUploadComplete}) {

    const [invoice1, setInvoice1] = useState(null);
    const [invoice2, setInvoice2] = useState(null);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (!invoice1 || !invoice2) {
            setError("You must upload two documents");
            return;
        }

        setError("");
        onUploadStart();

        const formData = new FormData();
        formData.append("invoice1", invoice1);
        formData.append("invoice2", invoice2);
        formData.append("lang", "ENG");

        try {
            const data = await compareUploadedFiles(formData);
            onUploadComplete(data);
        } catch (error) {
            setError(error.message);
        }
    }

    function handleCancel() {
        setError("");
    }

    return (
        <form className="flex justify-center items-center w-full min-h-screen px-10 sm:px-10 lg:px-20 pt-40 pb-20 overflow-y-auto bg-transparent" onSubmit={handleSubmit}>
            {error && (
                <div 
                    className="absolute w-full min-h-screen bg-gray-200/60 dark:bg-black/70 z-10 flex items-center justify-center"
                    onClick={handleCancel}
                >
                    <div className="min-w-[300px] min-h-[150px] flex flex-col items-center justify-evenly bg-white dark:bg-gray-800 rounded-xl gap-2 px-10 shadow-sm dark:border dark:border-gray-700">
                        <FontAwesomeIcon
                            icon={faCircleExclamation}
                            className="text-red-400 text-2xl"
                        />
                        <h1 className="text-red-400 text-center font-medium">{error}</h1>
                        <div>
                            <button 
                                className="text-gray-700 dark:text-white text-sm px-2 py-1 transition-transform duration-150 hover:scale-105 cursor-pointer"
                                onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
                
            )}
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-30 2xl:gap-40 items-center justify-between ">
                <FileInput id="invoice1" invoice={invoice1} onChange={(e) => setInvoice1(e.target.files[0])} />
                <div className="flex items-center justify-center">
                    <button type="submit" className="h-12 w-24 text-sm lg:h-15 lg:w-30 text-white bg-gray-900 hover:bg-gray-800 rounded-full lg:text-lg font-medium text-center transition-transform duration-200 ease-in-out transform hover:scale-105 dark:border dark:border-gray-600 dark:bg-darkgrey dark:hover:bg-gray-900 cursor-pointer">Compare</button>
                </div>
                <FileInput id="invoice2" invoice={invoice2} onChange={(e) => setInvoice2(e.target.files[0])} />
            </div>
        </form>
    )
}

export default UploadForm;
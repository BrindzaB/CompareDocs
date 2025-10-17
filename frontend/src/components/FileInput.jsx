import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faCheck } from "@fortawesome/free-solid-svg-icons";
import AIFog from "./design/AIFog";
import SmallFog from "./design/SmallFog";

function FileInput({ id, invoice, onChange }) {
    return (
        <div className="flex items-center justify-center min-w-[300px] lg:w-[400px]">
            {!invoice ? (
                <div className="flex items-center justify-center w-full h-96 lg:h-128 relative">
                    <AIFog />
                    <label
                        htmlFor={id}
                        className="flex flex-col items-center justify-center w-full h-full rounded-2xl cursor-pointer bg-white border border-gray-100 shadow-md hover:bg-gray-100 transition-all relative opacity-80 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700 hover:scale-102 duration-200 ease-in-out"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FontAwesomeIcon
                                icon={faUpload}
                                className="text-gray-500 text-2xl mb-2"
                            />
                            <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">
                                    Click to upload
                                </span>
                            </p>
                            <p className="text-xs text-gray-500">
                                Upload a document
                            </p>
                        </div>
                        <input
                            id={id}
                            type="file"
                            className="hidden"
                            onChange={onChange}
                        />
                    </label>
                </div>
            ) : (
                <div className="flex items-center justify-center relative">
                    <SmallFog />
                    <label 
                        className="w-24 h-24 lg:w-40 lg:h-40 rounded-full flex items-center justify-center animate-scaleIn shadow-md bg-white/80 dark:bg-gray-900/90 dark:border dark:border-gray-700"
                        >
                        <FontAwesomeIcon
                            icon={faCheck}
                            className="text-3xl text-gray-700 dark:text-white"
                        />
                    </label>
                </div>
            )}
        </div>
    );
}

export default FileInput;

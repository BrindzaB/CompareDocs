function ResultCard({title, attributeName1, attributeName2, attributeName3}) {
    return (
        <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <div className="flex items-center justify-center mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    {title}
                </h5>
            </div>
            <div className="flow-root flex-1 h-full mb-10">
                <ul role="list" className="h-full flex flex-col justify-evenly">
                    <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-lg font-normal text-gray-900 truncate dark:text-white">
                                    {attributeName1}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                2024.03.17
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center ">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-lg font-normal text-gray-900 truncate dark:text-white">
                                    {attributeName2}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                2024.03.17
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-lg font-normal text-gray-900 truncate dark:text-white">
                                    {attributeName3}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                8.490 HUF
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ResultCard;

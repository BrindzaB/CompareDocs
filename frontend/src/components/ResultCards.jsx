function ResultCard({title, paymentDate, invoiceDate, totalAmount}) {
    return (
        <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[550px] p-4 bg-gray-50 border border-gray-200 rounded-2xl shadow-md sm:p-8 flex flex-col">
            <div className="flex items-center justify-center mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900">
                    {title}
                </h5>
            </div>
            <div className="flow-root flex-1 h-full mb-10">
                <ul role="list" className="h-full flex flex-col justify-evenly">
                    <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-lg font-normal text-gray-900 truncate ">
                                    Payment date
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                {paymentDate || "N/A"}
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center ">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-lg font-normal text-gray-900 truncate">
                                    Invoice date
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-90e">
                                {invoiceDate || "N/A"}
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-lg font-normal text-gray-900 truncate">
                                    Total amount
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-90e">
                                {totalAmount || "N/A"}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ResultCard;

import { formatNumberToCurrency } from "../utils/formatNumber";

function ResultCard({title, companyName, invoiceDate, totalAmount}) {
  return (
    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[550px] p-1 rounded-2xl">
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-orange-400 to-red-400 rounded-2xl opacity-75 blur-lg"></div>
      
      <div className="relative w-full h-full p-4 bg-white rounded-2xl shadow-md sm:p-8 flex flex-col opacity-90 dark:bg-gray-900 dark:border dark:border-gray-700">
        <div className="flex items-center justify-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
        <div className="flow-root flex-1 h-full mb-10">
          <ul role="list" className="h-full flex flex-col justify-evenly">
            <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="flex min-w-0 ms-4">
                  <p className="text-xs sm:text-sm md:text-md font-normal text-gray-900 dark:text-white">
                    Company name
                  </p>
                </div>
                <div className="text-xs sm:text-sm md:text-md lg:text-lg inline-flex ml-auto items-center font-semibold text-gray-900 dark:text-white max-w-[180px] md:max-w-[250px] lg:max-w-[300px] overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                  {companyName || 'N/A'}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-xs sm:text-sm md:text-md font-normal text-gray-900 truncate dark:text-white">
                    Invoice date
                  </p>
                </div>
                <div className="text-xs sm:text-sm md:text-md lg:text-lg inline-flex items-center font-semibold text-gray-900 dark:text-white">
                  {invoiceDate || 'N/A'}
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-xs sm:text-sm md:text-md font-normal text-gray-900 truncate dark:text-white">
                    Total amount
                  </p>
                </div>
                <div className="text-xs sm:text-sm md:text-md lg:text-lg inline-flex items-center font-semibold text-gray-900 dark:text-white">
                  {formatNumberToCurrency(totalAmount)}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;


function Navbar() {

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center rtl:space-x-reverse">
                    <img src="/images/logo1.png" className="h-10" alt="CompareDocs Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CompareDocs</span>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col gap-2 p-4 md:p-0 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <a href="/" className="block text-gray-800 rounded-sm transition-transform duration-150 hover:scale-105 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block text-gray-800 rounded-sm transition-transform duration-150 hover:scale-105 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">About</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
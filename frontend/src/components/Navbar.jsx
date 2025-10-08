
function Navbar() {

    return (
        <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/images/logo.png" class="h-10" alt="Flowbite Logo"/>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">CompareDocs</span>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col gap-2 p-4 md:p-0 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <a href="/" class="block text-gray-800 rounded-sm transition-transform duration-150 hover:scale-105 hover:text-gray-900">Home</a>
                    </li>
                    <li>
                        <a href="/loading" class="block text-gray-800 rounded-sm transition-transform duration-150 hover:scale-105 hover:text-gray-900">About</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
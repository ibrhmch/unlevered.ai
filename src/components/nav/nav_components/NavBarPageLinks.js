import { Link } from "react-router-dom"

// Navigation Links that appear on the NavBar when the screen is large enough
function NavBarPageLinks({ myRef, isMenuOpen, handleMenuToggle }) {
    return (
        <div ref={myRef} className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-sm border border-graph-background rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  text-unlevered-textpurple">
                <li>
                    <button onClick={handleMenuToggle} className="block py-2 pl-3 pr-4 rounded hover:text-gray-300 md:p-0" aria-current="page">HOME</button>
                </li>
                <li>
                    <button onClick={handleMenuToggle} className="block py-2 pl-3 pr-4 rounded hover:text-gray-300 md:p-0">STOCKS</button>
                </li>
                <li>
                    <button onClick={handleMenuToggle} className="block py-2 pl-3 pr-4 rounded hover:text-gray-300 md:p-0">ABOUT</button>
                </li>
            </ul>
        </div>
    )
};

export default NavBarPageLinks;
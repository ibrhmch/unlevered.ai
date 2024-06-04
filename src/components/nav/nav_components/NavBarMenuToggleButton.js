// TODO dismiss the menu when the user clicks outside of the menu or click a link
function NavBarMenuToggleButton({ onClick, isMenuOpen }) {
    return (
        <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-unlevered-textpurple rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={onClick}
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
        >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
        </button>
    )
};

export default NavBarMenuToggleButton;
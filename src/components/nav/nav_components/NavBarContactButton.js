function NavBarContactButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="block py-2 pl-3 pr-4 text-unlevered-textpurple rounded md:hover:text-gray-300 md:p-0">
            CONTACT
        </button>
    )
};

export default NavBarContactButton;
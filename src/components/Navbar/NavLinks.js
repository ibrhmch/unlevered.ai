function NavLinks() {
    return (
        <div className="bg-gray-700 text-white px-4 py-2">
            <div className="flex space-x-4">
                <span to="/" className="hover:text-gray-300">Home</span>
                <span to="/stocks" className="hover:text-gray-300">Stocks</span>
                <span to="/about" className="hover:text-gray-300">About</span>
                <span to="/contact" className="hover:text-gray-300">Contact</span>
            </div>
        </div>
    );
};

export default NavLinks;

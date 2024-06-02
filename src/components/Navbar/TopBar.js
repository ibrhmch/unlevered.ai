import logo from '../../assets/images/logo.png';

function TopBar() {
    return (
        <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Company Logo" className="h-8 w-8 mr-2" />
                <span className="text-lg font-bold">Unlevered</span>
            </div>
        </div>
    );
};

export default TopBar;

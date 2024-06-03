import logo from '../../assets/images/logo.png';

function TopBar() {
    return (
        <div className="bg-unleveredpurple text-white px-4 py-2 flex justify-between items-center">
            <div className="flex flex-col items-start">
                <img src="https://unlevered.ai/wp-content/uploads/2024/04/Unlevered-Logo-with-text-1-1-e1712565469188.png" alt="Company Logo" className="h-14 mr-2" />
                {/* <span className="ml-2 font-light text-indigo-200">Equity Research for the Everyday Investor</span> */}
            </div>
        </div>
    );
};

export default TopBar;

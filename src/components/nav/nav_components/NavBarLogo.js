import { Link } from "react-router-dom"


function Logo() {
    return (
        <span className="flex items-start">
            {/* Uncomment and use if you have a logo image */}
            {/* <img src="your-logo-url" className="h-8 mr-3" alt="Flowbite Logo" /> */}
            <div className="flex flex-col items-start font-extralight">
                <img src="https://unlevered.ai/wp-content/uploads/2024/04/Unlevered-Logo-with-text-1-1-e1712565469188.png" alt="Company Logo" className="h-14 mr-2" />
            </div>
        </span>
    )
};

export default Logo;




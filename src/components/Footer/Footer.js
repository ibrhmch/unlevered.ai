function Footer() {
    const navigationsLinks = [
        ["HOME", "/HOME"],
        ["STOCKS", "/STOCKS"],
        ["ABOUT", "/ABOUT"]
    ];

    const addressBar = [
        "911 Random Street 6th Avenue",  //ADDRESS
        "Lower Manhattan, New York",        //CITY
        "212 xxx xxxx",     //PHONE NUMBER
    ]

    return (
        <div className="flex flex-col justify-between max-h-80">
            <div className="flex justify-around p-5 ml-3 text-xs md:text-sm font-extralight border-y border-gray-800">
                <div className="flex flex-col p-5 text-unlevered-textpurple">
                    <p className="px-3 pt-2">911 Random Street 6th Avenue</p>
                    <p className="px-3 pt-0">Lower Manhattan, New York</p>
                    <p className="px-3 pt-4">212 xxx xxxx</p>
                </div>
                <div className="flex flex-col p-5 mr-3">
                    <div></div>
                    {(
                        navigationsLinks.map((link, index) => (
                            <button className="text-unlevered-textpurple rounded hover:text-gray-300 px-3 pt-2 pb-1">{link[0]}</button>
                        )
                        )
                    )}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pb-20 pt-8 font-extralight text-unlevered-textpurple">
                <img src="https://unlevered.ai/wp-content/uploads/2024/04/Unlevered-Logo-with-text-1-1-e1712565469188.png" alt="Company Logo" className="h-6 my-2" />
                <p className="text-xs">2024 &copy; All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;

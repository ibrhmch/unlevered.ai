import { useEffect } from "react";
import "./NavModal.css";

const icons = ['fas fa-mobile-alt', 'far fa-envelope', 'fas fa-map-pin'];
const contacts = ['212 xxx xxxx', 'contact@unlevered.ai', 'Lower Manhattan, New York'];

function NavModal({ isModalOpen, onClose }) {
    useEffect(() => {
        const body = document.body;
        if (isModalOpen) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }

        return () => {
            body.classList.remove("no-scroll");
        };
    }, [isModalOpen]);

    if (!isModalOpen) {
        return null;
    }

    return (
        <div className=" font-thin fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray-600 rounded-md w-4/5 md:w-full max-w-md pb-3">
                <div className="flex flex-grow flex-row">
                    <h2 className="py-2 ml-10">Business Hours | <i>9 am to 5 pm</i></h2>
                    <button className="m-1 px-2 py-1 hover:bg-unleveredpurple rounded-md ml-auto" onClick={onClose}><i className="fas fa-times"></i></button>
                </div>
                <div className="flex flex-col mt-5 px-10">
                    <div className="flex flex-row justify-start items-center">
                        <div className="flex flex-row justify-center mb-2 px-2 w-1">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <p className="mb-2 ml-2 py-1 px-3 transition-colors duration-300 ease-out hover:bg-unleveredpurple rounded-md"><a href="tel:+1212xxxxxxx">212 xxx xxxx</a></p>
                    </div>

                    <div className="flex flex-row justify-start items-center">
                        <div className="flex flex-row justify-center mb-2 px-2 w-1">
                            <i className="far fa-envelope"></i>
                        </div>
                        <p className="mb-2 ml-2 py-1 px-3 transition-colors duration-300 ease-out hover:bg-unleveredpurple rounded-md"><a href="mailto:contact@unlevered.ai" className="">contact@unlevered.ai</a></p>
                    </div>

                    <div className="flex flex-row justify-start items-center">
                        <div className="flex flex-row justify-center mb-2 px-2 w-1">
                            <i className="fas fa-map-pin"></i>
                        </div>
                        <p className="mb-2 ml-2 py-1 px-3 transition-colors duration-300 ease-out hover:bg-unleveredpurple rounded-md"><a target="_blank" href="https://maps.app.goo.gl/4uPZuHAdknmJV77w8">Lower Manhattan, New York</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavModal;
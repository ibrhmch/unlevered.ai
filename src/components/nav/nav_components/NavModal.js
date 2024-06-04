import { useEffect } from "react";
import "./NavModal.css";

const icons = ['fas fa-mobile-alt', 'far fa-envelope', 'fas fa-map-pin'];
const contacts = ['212 444 8786', 'Tower@towerce.com', '120 West 31st Street, 7th Floor, New York, New York'];

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
            <div className="bg-white rounded-md w-4/5 md:w-full max-w-md pb-3">
                <div className="flex flex-grow flex-row">
                    <h2 className="py-2 ml-10">Business Hours | <i>9 am to 5 pm</i></h2>
                    <button className="m-1 px-2 py-1 hover:bg-gray-100 rounded-md ml-auto" onClick={onClose}><i className="fas fa-times"></i></button>
                </div>
                <div className="flex flex-col mt-5 px-10">
                    <div className="flex flex-row justify-start items-center">
                        <div className="flex flex-row justify-center mb-2 px-2 w-1">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <p className="mb-2 ml-2 py-1 px-3 transition-colors duration-300 ease-out hover:bg-gray-100"><a href="tel:+12124448786">212 444 8786</a></p>
                    </div>

                    <div className="flex flex-row justify-start items-center">
                        <div className="flex flex-row justify-center mb-2 px-2 w-1">
                            <i className="far fa-envelope"></i>
                        </div>
                        <p className="mb-2 ml-2 py-1 px-3 transition-colors duration-300 ease-out hover:bg-gray-100"><a href="mailto:Info@towerce.com" className="">Info@towerce.com</a></p>
                    </div>

                    <div className="flex flex-row justify-start items-center">
                        <div className="flex flex-row justify-center mb-2 px-2 w-1">
                            <i className="fas fa-map-pin"></i>
                        </div>
                        <p className="mb-2 ml-2 py-1 px-3 transition-colors duration-300 ease-out hover:bg-gray-100"><a target="_blank" href="https://maps.app.goo.gl/HCFZV9LrjuNtexoo9">120 West 31st Street, 7th Floor, New York, New York</a></p>
                    </div>
                    {/* <div className="flex justify-center p-4 font-extralight">
                        <div className="" dangerouslySetInnerHTML={
                            {
                                __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6313061653036!2d-73.99291048748276!3d40.74813763528156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af3d4aa9fd%3A0x90059aaabd063cc2!2s120%20W%2031st%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1700954922139!5m2!1sen!2sus" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                            }
                        } />
                    </div> */}

                </div>
            </div>
        </div>
    );
}

export default NavModal;
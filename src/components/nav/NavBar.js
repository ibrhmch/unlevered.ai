import React, { useState, useRef, useEffect } from "react";
import NavBarLogo from "./nav_components/NavBarLogo";
import NavBarContactButton from "./nav_components/NavBarContactButton";
import NavBarMenuToggleButton from "./nav_components/NavBarMenuToggleButton";
import NavBarPageLinks from "./nav_components/NavBarPageLinks";
import NavModal from "./nav_components/NavModal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    // Adding event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener - do not remove
    return () => {
      // Removing the event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="bg-unleveredpurple fixed w-full z-20 top-0 left-0 border-b border-violet-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 font-extralight">
        <NavBarLogo />

        <div className="flex md:order-2 text-sm">
          <NavBarContactButton onClick={toggleModal} />
          {isModalOpen && <NavModal isModalOpen={isModalOpen} onClose={toggleModal} />}
          <NavBarMenuToggleButton onClick={handleMenuToggle} isMenuOpen={isMenuOpen} />
        </div>
        <NavBarPageLinks myRef={menuRef} isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from 'react';
import logo from "../../src/assets/Logo/Logo-01.png";
import { link } from 'framer-motion/client';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Swift Debt Collection Logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-white text-lg font-semibold">
            SWIFT DEBT COLLECTION
          </span>
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex items-center space-x-8">
          <span className="text-gray-400 text-sm">+971 55 1357953</span>
          <span className="text-gray-400 text-sm">info@swiftdebt.ae</span>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {[
           { name:"HOME",link:"/"},
           { name:"SERVICES",link: "/services"},
           { name:"ABOUT US",link:"/aboutUs"},
          
           { name :"CONTACT US",link:"/contactUs"},
          ].map((item) => (
            <Link
             to={item.link}
              key={item.name}
              className="text-white hover:text-cyan-400 text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          className="md:hidden flex items-center text-gray-200 hover:text-cyan-400 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 bg-gray-800 p-4 rounded-lg shadow-md">
          {[
            "HOME",
            "SERVICES",
            "ABOUT US",
            "CAREERS",
            "CONTACT US",
          ].map((item) => (
            <Link
              to={`#${item.toLowerCase().replace(' ', '-')}`}
              key={item}
              className="block text-white hover:text-cyan-400 text-base font-medium"
            >
              {item}
            </Link>
          ))}
          <div className="mt-4 space-y-2">
            <span className="block text-gray-400 text-sm">+971 55 1357953</span>
            <span className="block text-gray-400 text-sm">info@swiftdebt.ae</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;

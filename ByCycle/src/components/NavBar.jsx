import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/istockphoto-1495088043-612x612.jpg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClickedProfile, setIsClickedProfile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsClickedProfile(!isClickedProfile); // Correggi la logica per invertire isClickedProfile
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 backdrop-filter backdrop-blur-lg bg-transparent bg-gray-800 text-white py-4 ${
        isOpen
          ? ""
          : "border-b border-gray-400 mb-4 transition-all duration-300"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-8 w-auto w-20 h-20" />
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="block text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-black "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navbar links */}
        <nav
          className={`${isOpen ? "md:flex" : ""}  md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative bg-transparent md:py-0 md:space-x-4 top-16 md:top-0 right-0 left-0 bg-gray-800 md:flex-row md:flex-1 ${
            isOpen
              ? "border-b border-gray-400 mb-4 transition-all duration-300"
              : ""
          } pb-5 `}
        >
          <ul
            className={`flex  items-center  justify-center ${
              isOpen ? "flex-col" : ""
            }	 gap-4 md:gap-8 text-sm mt-4 md:mt-0 md:ml-auto `}
          >
            <li>
              <Link to="/" className="hover:text-gray-300 text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bikes" className="hover:text-gray-300 text-black">
                Bikes
              </Link>
            </li>
            <li>
              <Link
                to="/accessories"
                className="hover:text-gray-300 text-black"
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-gray-300 text-black">
                Community
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-300 text-black">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 text-black">
                Contact
              </Link>
            </li>
            <li>
              {isOpen && (
                <div>
                  <Link
                    to="#"
                    className="hover:text-gray-300 text-black"
                    onClick={toggleProfile}
                  >
                    Your Profile
                  </Link>
                  {isClickedProfile && (
                    <ul>
                      <li>
                        <Link to="#" className="text-xs  text-black">
                          Log-Out
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Button for booking a test ride */}
        <Button
          color="white"
          variant="outline"
          shape="round"
          className="hidden md:block text-black"
          onClick={toggleProfile}
        >
          <img src={profile} alt="profilo" className="w-10" />
          {isClickedProfile && (
            <Link to="#" className="text-xs  text-black">
              Log-Out
            </Link>
          )}
        </Button>
      </div>
    </header>
  );
}

export default Navbar;

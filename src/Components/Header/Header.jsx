import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const NavLink = React.memo(({ text, to, isSelected, onClick }) => (
  <li>
    <Link
      to={to}
      className={`transition duration-300 ease-in-out ${
        isSelected ? "text-primary" : "hover:text-yellow-500"
      }`}
      onClick={onClick}
    >
      {text}
    </Link>
  </li>
));

const Header = React.memo(() => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { text: "Services", link: "/carriyva" },
    { text: "Career", link: "/career" },
    { text: "About Us", link: "/aboutUs" },
    { text: "Contact Us", link: "/contactUs" },
  ];

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const handleLinkClick = useCallback((index) => {
    setSelectedPage(index);
    closeMenu();
  }, [closeMenu]);

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent p-3 lg:p-10 z-50">
      <nav className="flex items-center justify-between px-5 lg:rounded-xl lg:px-20 py-5 lg:py-6 bg-gray-100 shadow-md border border-gray-200 sm:rounded-b-xl">
        {/* Logo Section */}
        <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Carryiva
        </h1>

        {/* Hamburger Icon for Mobile/Tablet */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-3xl text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed lg:static top-0 left-0 w-full lg:w-auto h-full lg:h-auto bg-gray-100 lg:bg-transparent flex flex-col lg:flex-row items-center lg:items-center space-y-5 lg:space-y-0 lg:space-x-10 text-lg lg:text-xl font-medium text-gray-800 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          {isMenuOpen && (
            <button
              onClick={closeMenu}
              aria-label="Close Menu"
              className="absolute top-5 right-5 text-3xl lg:hidden"
            >
              <CloseIcon />
            </button>
          )}

          {links.map((link, index) => (
            <NavLink
              key={index}
              text={link.text}
              to={link.link}
              isSelected={selectedPage === index}
              onClick={() => handleLinkClick(index)}
            />
          ))}

          {/* Buttons (Add to Hamburger Menu on Mobile/Tablet) */}
          <li className="flex lg:hidden flex-col items-center space-y-3">
            <Link to="signin" onClick={closeMenu}>
              <button className="w-[120px] h-[50px] bg-primary text-white rounded-lg text-medium font-bold">
                Sign In
              </button>
            </Link>
            <Link to="/register" onClick={closeMenu}>
              <button className="w-[120px] h-[50px] bg-transparent text-100 rounded-lg text-medium font-bold">
                Register
              </button>
            </Link>
          </li>
        </ul>

        {/* Buttons for Desktop Only */}
        <div className="hidden lg:flex space-x-5">
          <Link to="signin">
            <button className="w-[120px] h-[50px] bg-primary text-white rounded-lg text-medium font-bold">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="w-[120px] h-[50px] bg-transparent text-100 rounded-lg text-medium font-bold">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
});

export default Header;

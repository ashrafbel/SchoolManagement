import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { navItems } from "../constants";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../router";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);  // Référence pour le menu déroulant

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Fonction pour gérer l'ouverture du menu déroulant en survolant
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  // Fonction pour gérer la fermeture du menu déroulant en quittant
  const handleMouseLeave = (event) => {
    // Vérifier si la souris est toujours sur le menu déroulant
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setDropdownOpen(false);
    }
  };

  return (
<nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
  <div className="container px-4 mx-auto relative lg:text-sm">
    <div className="flex justify-between items-center">
      <div className="mr-5 flex flex-shrink-0 text-2xl font-semibold inline-flex items-center">
        <Logo />
      </div>
      <ul className="hidden lg:flex ml-14 space-x-12 items-center">
        {navItems.map((item, index) => (
        <li key={index}>
          <Link to={item.href} className="hover:text-orange-500 transition-colors">
              {item.label}
          </Link>
        </li>
    ))}
        {/* Dropdown Menu */}
        <li className="relative">
          <button 
            onClick={toggleDropdown}
            className="flex items-center justify-between py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors"
          >
            Recherch 
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white divide-y divide-gray-100 divide-orange-100 rounded-lg shadow dark:bg-orange-600 dark:divide-orange-500">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-orange-500 dark:hover:text-white">Matiéres et Modules</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-orange-500 dark:hover:text-white">Cours</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-orange-500 dark:hover:text-white">Exercices</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
      <div className="hidden lg:flex justify-center space-x-12 items-center">
        <Link to={LOGIN_ROUTE} className="py-2 px-3 border rounded-md hover:bg-gray-700 transition-colors">
          Sign In
        </Link>
        <Link to={'/register'} className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:opacity-80 transition-opacity">
            Create an account
          </Link>
      </div>
      <div className="lg:hidden md:flex flex-col justify-end">
        <button onClick={toggleNavbar} className="text-white">
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>
    {mobileDrawerOpen && (
      <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
        <ul>
          {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="hover:text-orange-500 transition-colors">
                {item.label}
            </Link>
          </li>
      ))}
        </ul>
        <div className="flex space-x-6">
          <Link to={LOGIN_ROUTE} className="py-2 px-3 border rounded-md hover:bg-gray-700 transition-colors">
            Sign In
          </Link>
          <Link to={'/register'} className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white hover:opacity-80 transition-opacity">
            Create an account
          </Link>
        </div>
      </div>
    )}
  </div>
</nav>

  );
};

export default Navbar;

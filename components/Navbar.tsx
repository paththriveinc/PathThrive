
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, PathThriveMarkIcon } from '../constants.tsx'; 
import { NavLinkItem } from '../types'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50"> {/* Shadow softened */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 text-[#5468FF] hover:text-[#4355E4] group">
              <PathThriveMarkIcon className="h-8 w-auto text-[#5468FF] group-hover:text-[#4355E4] transition-colors" />
              <span className="text-2xl font-bold">PathThrive</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {NAV_LINKS.filter(link => !link.isCta).map((link: NavLinkItem) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'text-[#5468FF] font-semibold'
                      : 'text-slate-700 hover:text-[#5468FF] hover:bg-indigo-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {NAV_LINKS.filter(link => link.isCta).map((link: NavLinkItem) => (
               <Link
                key={link.label}
                to={link.path}
                className="bg-[#5468FF] hover:bg-[#4355E4] text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out shadow-md hover:shadow-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-[#5468FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5468FF] p-2 rounded-md"
              aria-label="Open main menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white shadow-xl z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-indigo-100 text-[#5468FF] font-semibold'
                      : 'text-slate-700 hover:bg-indigo-50 hover:text-[#5468FF]'
                  } ${link.isCta ? 'bg-[#5468FF] text-white hover:bg-[#4355E4] hover:text-white text-center my-2' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
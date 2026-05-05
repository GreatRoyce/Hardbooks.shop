import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes, FaUser } from "react-icons/fa";
import SearchBar from "../../../components/ui/primitives/SearchBar";
import CompBtn from "../../../components/ui/primitives/CompBtn";
import AuthPage from "../pages/Auth/AuthPage";
import { useCart } from "../../shared/context/CartContext";

// Helper to prevent body scroll when menu is open
const useLockBodyScroll = (lock) => {
  useEffect(() => {
    if (lock) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lock]);
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { itemsCount } = useCart();
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useLockBodyScroll(isMenuOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const openAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  }, []);

  const closeAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  // Navigation link styles
  const navLinkStyles = ({ isActive }) =>
    `text-inverted/80 ${navbarstyles.base} ${
      isActive ? "text-tertiary underline" : ""
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite shadow-sm">
        <nav className="h-14 w-full border-b border-gray-300" aria-label="Main navigation">
          <div className="h-full w-full px-4 sm:px-6 flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-sm sm:text-base uppercase font-bold tracking-wide hover:text-tertiary transition-colors"
              aria-label="Hardbooks.shop home"
            >
              Hardbooks.shop
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden sm:flex items-center space-x-8 text-base font-semibold">
              <li>
                <NavLink to="/" className={navLinkStyles} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkStyles}>
                  About
                </NavLink>
              </li>
            </ul>

            {/* Desktop actions */}
            <div className="hidden sm:flex items-center gap-3">
              <SearchBar
                variant="secondary"
                className="border border-black text-inverted/80 w-48 lg:w-64"
                placeholder="Search the archives..."
                aria-label="Search books"
              />
              <Link
                to="/cart"
                className="relative"
                aria-label={`Cart with ${itemsCount} items`}
              >
                <CompBtn variant="secondary" size="small">
                  <FaCartPlus size={22} aria-hidden="true" />
                </CompBtn>
                {itemsCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-red-800 text-offwhite text-xs font-semibold rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1"
                    aria-label={`${itemsCount} items in cart`}
                  >
                    {itemsCount > 99 ? "99+" : itemsCount}
                  </span>
                )}
              </Link>
              <CompBtn
                onClick={openAuthModal}
                variant="secondary"
                size="small"
                aria-label="Sign in or create account"
              >
                <FaUser size={22} aria-hidden="true" />
              </CompBtn>
            </div>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="sm:hidden relative z-20 p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <FaTimes size={20} aria-hidden="true" />
              ) : (
                <FaBars size={20} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={`fixed top-14 left-0 right-0 bottom-0 bg-offwhite shadow-lg sm:hidden transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="flex flex-col h-full overflow-y-auto pb-20">
              <ul className="flex flex-col space-y-1 px-4 pt-4">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg text-base font-medium ${
                        isActive
                          ? "bg-tertiary/10 text-tertiary"
                          : "text-inverted/80 hover:bg-gray-100"
                      }`
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg text-base font-medium ${
                        isActive
                          ? "bg-tertiary/10 text-tertiary"
                          : "text-inverted/80 hover:bg-gray-100"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
              <div className="border-t border-gray-200 my-4"></div>
              <div className="px-4 space-y-4">
                <SearchBar
                  variant="secondary"
                  placeholder="Search books..."
                  className="w-full border border-black"
                  aria-label="Search"
                />
                <div className="flex items-center justify-between gap-4">
                  <Link
                    to="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1"
                  >
                    <CompBtn
                      variant="secondary"
                      size="medium"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <FaCartPlus size={20} aria-hidden="true" />
                      <span>Cart</span>
                      {itemsCount > 0 && (
                        <span className="bg-tertiary text-offwhite text-xs rounded-full px-2 py-0.5">
                          {itemsCount}
                        </span>
                      )}
                    </CompBtn>
                  </Link>
                  <CompBtn
                    onClick={openAuthModal}
                    variant="secondary"
                    size="medium"
                    className="flex-1 flex items-center justify-center gap-2"
                  >
                    <FaUser size={20} aria-hidden="true" />
                    <span>Sign in</span>
                  </CompBtn>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Auth Modal - Portal would be better, but keeping simple */}
      {isAuthModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 transition-opacity"
          onClick={closeAuthModal}
          role="dialog"
          aria-modal="true"
          aria-label="Authentication"
        >
          <div
            className="relative bg-offwhite rounded-xl shadow-xl w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeAuthModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <FaTimes size={20} aria-hidden="true" />
            </button>
            <AuthPage />
          </div>
        </div>
      )}
    </>
  );
};

const navbarstyles = {
  base: "underline-offset-4 hover:underline transition duration-300 cursor-pointer hover:text-tertiary py-1",
};

export default NavBar;

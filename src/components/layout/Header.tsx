import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { navLinks } from '../../data/siteData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle clicking the dropdown arrow
  const handleDropdownToggle = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Optional: Close dropdown if clicking outside
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header 
      // Dynamic classes for header background and shadow based on scroll position
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* School Logo and Name - always visible and clickable */}
          <NavLink to="/" className="flex items-center gap-2">
            <GraduationCap size={28} className="text-primary-400" />
            <span className="font-heading font-bold text-xl text-primary-700">EduSite Basic</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" ref={navRef}>
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative flex items-center"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium text-sm transition-colors ${
                      isScrolled
                        ? isActive
                          ? 'text-primary-600'
                          : 'text-secondary-700 hover:text-primary-500'
                        : isActive
                        ? 'text-primary-400'
                        : 'text-secondary-800 hover:text-primary-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                {/* Arrow button for dropdown */}
                {link.variants && (
                  <button
                    type="button"
                    className={`ml-1 p-1 rounded transition-colors ${
                      activeDropdown === link.name ? (isScrolled ? 'bg-primary-50' : 'bg-primary-700') : ''
                    }`}
                    onClick={() => handleDropdownToggle(link.name)}
                    aria-label={`Toggle ${link.name} dropdown`}
                  >
                    <ChevronDown size={16} className={`${activeDropdown === link.name ? 'rotate-180' : ''} transition-transform`} />
                  </button>
                )}
                {/* Dropdown for variants, visible on arrow click if variants exist */}
                {link.variants && activeDropdown === link.name && (
                  <div className={`absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg py-1 ${isScrolled ? 'bg-white' : 'bg-primary-600'}`}>
                    {link.variants.map((variant) => (
                      <NavLink
                        key={variant.path}
                        to={variant.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm transition-colors ${
                            isScrolled
                              ? isActive
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-secondary-700 hover:bg-secondary-100 hover:text-primary-500'
                              : isActive
                              ? 'text-accent-200'
                              : 'text-white/90 hover:bg-primary-500 hover:text-white'
                          }`
                        }
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {variant.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button - visible only on smaller screens */}
          <button
            className="md:hidden p-2 text-secondary-700"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-8">
            {/* Mobile menu logo and close button */}
            <NavLink to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <GraduationCap size={28} className="text-primary-400" />
              <span className="font-heading font-bold text-xl text-primary-700">EduSite Basic</span>
            </NavLink>
            <button
              className="p-2 text-secondary-700"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile navigation links */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium text-lg p-2 transition-colors ${
                      isActive
                        ? 'text-primary-600 bg-primary-50 rounded-md'
                        : 'text-secondary-700 hover:text-primary-500'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
                {/* Mobile dropdown for variants */}
                {link.variants && link.variants.length > 1 && (
                  <div className="ml-4 border-l-2 border-secondary-200 pl-4">
                    {link.variants.slice(1).map((variant) => ( // Exclude the first (default) variant
                      <NavLink
                        key={variant.path}
                        to={variant.path}
                        className={({ isActive }) =>
                          `block py-2 text-base transition-colors ${
                            isActive
                              ? 'text-primary-600'
                              : 'text-secondary-600 hover:text-primary-500'
                          }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {variant.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

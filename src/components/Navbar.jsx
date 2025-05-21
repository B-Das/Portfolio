import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScroll = () => {
    if (!isMenuOpen) {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
      // Force navbar to be in non-scrolled state when menu is open
      setIsScrolled(false);
    } else {
      // Restore scroll
      document.body.style.overflow = '';
      // Update scroll state after menu closes
      handleScroll();
    }
    
    return () => {
      // Cleanup
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const handleMenuItemClick = (href) => {
    setIsMenuOpen(false);
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300',
          isScrolled && !isMenuOpen
            ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' 
            : 'py-5'
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#hero" className="flex items-center font-bold text-xl text-foreground">
            <span>Biraj</span>
            <span className="text-primary text-glow">Portfolio</span>
            
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Theme Toggle Button - Desktop */}
            <div className="hidden md:block ml-6">
              <ThemeToggleButton />
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="p-2 text-foreground z-50 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "close menu" : "open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Completely separate from navbar */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute top-5 right-5 z-50">
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMenuOpen(false)}
            aria-label="close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-6 py-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="text-xl text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => handleMenuItemClick(item.href)}
            >
              {item.name}
            </button>
          ))}
          
          {/* Theme Toggle Button - Mobile */}
          <div className="mt-6">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </>
  );
};

// Internal ThemeToggle button component
const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full transition-colors duration-300 focus:outline-none"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-blue-900" />
      )}
    </button>
  );
};


import React from 'react';
import Button from './Button';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <img src="/assets/logo-on-light.png" alt="Peanuts Group" className="h-10 w-auto block dark:hidden transition-transform group-hover:scale-105" />
          <img src="/assets/logo-on-dark.png" alt="Peanuts Group" className="h-10 w-auto hidden dark:block transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Palvelut', 'Referenssit', 'Meistä', 'Urat'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-heading font-medium text-sm uppercase tracking-widest text-gray-600 dark:text-[#CECECE] hover:text-peanuts-accent transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-peanuts-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA & Theme Toggle */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:border-peanuts-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button variant="primary" className="hidden sm:flex !py-2.5 !px-6">
            Ota yhteyttä
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

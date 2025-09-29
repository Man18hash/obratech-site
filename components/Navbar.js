import { useState } from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="gradient-bg text-white px-6 py-4 flex justify-between items-center sticky top-0 z-40 shadow-lg">
      {/* Left side: Logo + Brand */}
      <div className="flex items-center space-x-2">
        <div className="bg-white p-1 rounded-full shadow-sm">
          <Image src="/logo.png" alt="ObraTech Logo" width={60} height={60} className="rounded-full" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold">OBRATECH</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#services" className="hover:text-yellow-400">Services</a>
        <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
        <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-brand-blue rounded-lg shadow-lg p-4 space-y-2 md:hidden">
          <a href="#home" className="block hover:text-yellow-400">Home</a>
          <a href="#services" className="block hover:text-yellow-400">Services</a>
          <a href="#pricing" className="block hover:text-yellow-400">Pricing</a>
          <a href="#portfolio" className="block hover:text-yellow-400">Portfolio</a>
          <a href="#about" className="block hover:text-yellow-400">About</a>
          <a href="#contact" className="block hover:text-yellow-400">Contact</a>
          
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 w-full p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Light Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}

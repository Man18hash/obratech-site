import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-blue text-white px-6 py-4 flex justify-between items-center">
      {/* Left side: Logo + Brand */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="ObraTech Logo" width={35} height={35} />
        <h1 className="text-xl md:text-2xl font-bold">OBRATECH</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#services" className="hover:text-yellow-400">Services</a>
        <a href="#pricing" className="hover:text-yellow-400">Pricing</a>
        <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
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
        </div>
      )}
    </nav>
  );
}

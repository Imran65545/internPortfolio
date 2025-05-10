"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // uses Lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-6 bg-white text-gray-800 bg-opacity-90 z-50 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">A.Carter</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 uppercase">
          <Link href="/" className="hover:text-gray-500 transition">Home</Link>
          <Link href="/showreel" className="hover:text-gray-500 transition">Show Reel</Link>
          <Link href="/about" className="hover:text-gray-500 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden uppercase">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">Home</Link>
          <Link href="/showreel" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">Show Reel</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}

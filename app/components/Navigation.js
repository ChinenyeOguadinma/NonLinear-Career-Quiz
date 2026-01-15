'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav style={{ backgroundColor: '#282c50', borderBottom: '1px solid white' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition">
            Non-Linear Careers
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="/quiz" className="hover:text-gray-300 transition">
              Take Quiz
            </Link>
            <Link href="/#about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link href="/#speaker" className="hover:text-gray-300 transition">
              Work with me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/quiz" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Take Quiz
            </Link>
            <Link href="/about" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>
  About
</Link>
            <Link href="/speaker" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Speaking
            </Link>
                <Link href="/workshop" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>
              Workshop
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            CORDOVA.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-pink-400 font-mono uppercase text-sm text-gray-300">
              About
            </Link>
            <Link href="#technologies" className="hover:text-pink-400 font-mono uppercase text-sm text-gray-300">
              Technologies
            </Link>
            <Link href="#experience" className="hover:text-pink-400 font-mono uppercase text-sm text-gray-300">
              Experience
            </Link>
            <Link href="#certifications" className="hover:text-pink-400 font-mono uppercase text-sm text-gray-300">
              Credentials
            </Link>
            <Link href="#contact" className="hover:text-pink-400 font-mono uppercase text-sm text-gray-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden p-2 text-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="font-mono uppercase text-sm py-2 border-b border-gray-900 text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#technologies"
              className="font-mono uppercase text-sm py-2 border-b border-gray-900 text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Technologies
            </Link>
            <Link
              href="#experience"
              className="font-mono uppercase text-sm py-2 border-b border-gray-900 text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#certifications"
              className="font-mono uppercase text-sm py-2 border-b border-gray-900 text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Credentials
            </Link>
            <Link
              href="#contact"
              className="font-mono uppercase text-sm py-2 text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}


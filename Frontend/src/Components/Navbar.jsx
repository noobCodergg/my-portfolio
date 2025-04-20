import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import SocialMedia from './SocialMedia'

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-4 left-0 w-full z-50 px-4 md:px-10">
      <div className="flex items-center justify-between text-white font-rubik">
        <div className="text-2xl font-bold text-white">.Niloy</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative inline-block px-3 py-1 rounded overflow-hidden group"
            >
              <span className="absolute inset-0 bg-navbg scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out rounded z-0 origin-center"></span>
              <span className="relative z-10 text-white group-hover:text-text1 text-sm font-semibold transition-colors duration-500">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:block">
          <SocialMedia />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 mt-4 rounded-lg py-4 flex flex-col items-center gap-4 transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white text-base font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <SocialMedia />
        </div>
      )}
    </nav>
  )
}

export default Navbar

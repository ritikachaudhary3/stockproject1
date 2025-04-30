import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon library (optional)
import logo from '/src/assets/5[1] 1.png'
import { Link as ScrollLink } from "react-scroll"; // import Link from react-scroll



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Close mobile menu after click
      }
    };

  return (
    <nav className="bg-[#FEF8FA] w-full z-10 py-2 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center h-[60px]">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-end space-x-8">
        <button onClick={() => scrollToSection('home')} className="hover:text-[#3B82F6] font-medium">Home</button>         
        <button onClick={() => scrollToSection('aboutus')} className="hover:text-[#3B82F6] font-medium">About</button>          
        <button onClick={() => scrollToSection('course')} className="hover:text-[#3B82F6] font-medium">Course</button>
        <button onClick={() => scrollToSection('blog')} className="hover:text-[#3B82F6] font-medium">Blog</button>
        <button onClick={() => scrollToSection('contactus')} className="hover:text-[#3B82F6] font-medium">Contact</button>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col justify-end px-4 pt-2 pb-4 space-y-2">
          <button onClick={() => scrollToSection('home')} className="hover:text-[#3B82F6] font-medium">Home</button>         
        <button onClick={() => scrollToSection('aboutus')} className="hover:text-[#3B82F6] font-medium">About</button>          
        <button onClick={() => scrollToSection('course')} className="hover:text-[#3B82F6] font-medium">Course</button>
        <button onClick={() => scrollToSection('blog')} className="hover:text-[#3B82F6] font-medium">Blog</button>
        <button onClick={() => scrollToSection('contactus')} className="hover:text-[#3B82F6] font-medium">Contact</button>
        </div>
      )}
    </nav>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon library (optional)
import logo from '/src/assets/5[1] 1.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FEF8FA] w-full shadow-md  z-10 py-2 ">
      <div className="max-w-7xl mx-auto px-10  shadow-md flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold  text-blue-600">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex  justify-end space-x-8 ">
          <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
          <a href="/aboutus" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
          <a href="/course" className="text-gray-600 hover:text-blue-600 font-medium">Courses</a>
          <a href="/blog" className="text-gray-600 hover:text-blue-600 font-medium">Blog</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
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
        <div className="md:hidden bg-white flex flex-col justify-end px-4 pt-2 pb-4 space-y-2 shadow-md">
          <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
          <a href="/aboutus" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
          <a href="/course" className="text-gray-600 hover:text-blue-600 font-medium">Courses</a>
          <a href="/blog" className="text-gray-600 hover:text-blue-600 font-medium">Blog</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
}

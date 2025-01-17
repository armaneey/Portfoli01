import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cyan-800 text-white p-4 shadow-md">
  <nav className="container mx-auto flex justify-between items-center">
    
    <h1 className="text-2xl font-bold">My Portfolio</h1>

    <div
      className="md:hidden cursor-pointer"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div className="w-8 h-1 bg-white mb-1"></div>
      <div className="w-8 h-1 bg-white mb-1"></div>
      <div className="w-8 h-1 bg-white"></div>
    </div>

   
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <ul className="flex flex-col gap-6 mt-16 px-6">
        <li>
          <Link
            to="/"
            className="hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            MY SERVICES
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>

    {/* Desktop Navigation */}
    <ul className="hidden md:flex flex-row gap-4">
      <li>
        <Link to="/" className="hover:text-cyan-400">
          ABOUT
        </Link>
      </li>
      <li>
        <Link to="/projects" className="hover:text-cyan-400">
          PROJECTS
        </Link>
      </li>
      <li>
        <Link to="/services" className="hover:text-cyan-400">
          MY SERVICES
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-cyan-400">
          CONTACT
        </Link>
      </li>
    </ul>
  </nav>
</header>
  );
};

export default Header;
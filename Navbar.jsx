import React from "react";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="flex justify-between items-center h-16 px-8 bg-gray-900 text-white">
        <div className="text-lg font-bold">A</div>
        <div className="flex space-x-8">
          <a href="#about" className="hover:text-teal-400">
            01. About
          </a>
          <a href="#experience" className="hover:text-teal-400">
            02. Experience
          </a>
          <a href="#projects" className="hover:text-teal-400">
            03. Projects
          </a>
          <a href="#contact" className="hover:text-teal-400">
            04. Contact
          </a>
        </div>
        <button className="border border-teal-400 px-4 py-2 rounded text-teal-400 hover:bg-teal-400 hover:text-gray-900">
          Resume
        </button>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

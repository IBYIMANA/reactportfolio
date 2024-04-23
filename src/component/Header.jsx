import React from 'react';


const Header = () => {
  return (
    <nav className='fixed z-10 justify-between w-full px-5 py-2 -mt-32 text-white bg-gray-700 rounded-lg'>
      <ul className="flex py-4 pl-56 space-x-4 ml-96">
        <li><a href="/" className="text-2xl font-extrabold text-white hover:text-lime-600">Home</a></li>
        <li><a href="/about" className="text-2xl font-extrabold text-white hover:text-lime-600">About</a></li>
        <li><a href="/Skills" className="text-2xl font-extrabold text-white hover:text-lime-600">Skills</a></li>
        <li><a href="/Project" className="text-2xl font-extrabold text-white hover:text-lime-600">Project</a></li>
        <li><a href="/contact" className="text-2xl font-extrabold text-white hover:text-lime-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;

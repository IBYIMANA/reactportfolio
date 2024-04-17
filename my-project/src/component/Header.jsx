import React from 'react';


const Header = () => {
  return (
    <nav className='h-16 rounded-lg -mt-80 ml-96'>
      <div className="flex items-center justify-between">
      <ul className="flex py-4 ml-4 space-x-4 ">
        <li><a href="/" className="font-extrabold text-white hover:text-lime-600 ml-96">Home</a></li>
        <li><a href="/about" className="font-extrabold text-white hover:text-lime-600">About</a></li>
        <li><a href="/contact" className="font-extrabold text-white hover:text-lime-600">Skills</a></li>
        <li><a href="/contact" className="font-extrabold text-white hover:text-lime-600">Contact</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default Header;

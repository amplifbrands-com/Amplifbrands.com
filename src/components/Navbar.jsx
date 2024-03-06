import { useState } from 'react';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='fixed top-2 left-10 right-10'>
<div className="navbar mt-5 ml-10 mr-10 flex justify-between items-center bg-white/30 h-12 rounded-md border border-gray-400">
        <div className="flex items-center ml-3">
          <img src="./src/assets/amplif_logo.png" alt="Amplif Logo" className="h-8 mr-2" />
        </div>

        <div className="flex-auto ml-9">
          <a href="#" className="mr-4 text-white" >
            HOME
          </a>
        </div>

        <div className='relative flex-auto'>
          <button className="text-yellow-500 flex items-center" onClick={toggleDropdown}>
            SERVICES
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 12.293l-4.146-4.147a.5.5 0 0 0-.708.708l5 5a.5.5 0 0 0 .708 0l5-5a.5.5 0 1 0-.708-.708L10 12.293z" clipRule="evenodd" />
            </svg>
          </button>
          <div className={"absolute top-full bg-white shadow-md rounded-lg mt-1 py-2 w-48 " + (isDropdownOpen ? "" : "hidden")}>
            <a href="#" className="block px-4 py-2 text-black">Service 1</a>
            <a href="#" className="block px-4 py-2 text-black">Service 2</a>
            <a href="#" className="block px-4 py-2 text-black">Service 3</a>
          </div>
        </div>

        <div className="flex-auto">
          <a href="#" className="mr-4 text-white" >PORTFOLIOS</a>
        </div>

        <div className="flex-auto">
          <a href="#" className="mr-4 text-white">CONTACT US</a>
        </div>

        <div className="flex-auto mr-2 text-white">
          <a href="#">ABOUT US</a>
        </div>

        <div className="mr-3">
          <button className="bg-yellow-500 text-gray-900 py-2 px-4 rounded">BOOK A MEETING</button>
        </div>

      </div>
    </nav>
  );
}

import React, { useState } from "react"
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline, IoSearchOutline } from "react-icons/io5";

// styles
import './Navbar.css'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const closeNavbar = () => {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert('just checking the working of Search Button')
  }

  return (
    <div className="navbar shadow-md w-full lg:relative xs:fixed z-10">
      <div className="xs:flex items-center xs:justify-around md:justify-between xs:items-center text-center bg-white 2xl:py-3 py-2 lg:px-10 md:px-6 sm:px-4 xs:px-2">
        <div className="lg:w-32 xl:w-48 2xl:w-64 md:w-24 sm:w-24 xs:w-20 absolute xs:static xs:left-2 xs:top-3 ">
          <Link to="/">
            <img src="./assets/images/logo.png" alt="" />
          </Link>
        </div>

        <div onClick={() => setOpen(!open)} className="text-2xl absolute right-2 top-3 cursor-pointer lg:hidden">
          {!open ? (
            <IoMenuOutline name={open ? "close" : "menu"}></IoMenuOutline>
          ) : (
            <IoCloseOutline name={open ? "close" : "menu"}></IoCloseOutline>
          )}
        </div>

        <div className="relative w-fit">
          <input
            type="text"
            id="search"
            className="block w-full font-blender400 md:px-4 xs:px-1 lg:w-64 lg:text-lg md:text-md md:w-48 sm:w-40 xs:w-36 lg:mr-0 sm:mr-8"
            placeholder="search..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center search-icon">
            <IoSearchOutline
              size={18}
              className="mr-2"
              onClick={handleSearch} />
          </div>
        </div>

        <ul className={`lg:flex lg:items-center lg:pb-0 fixed lg:static bg-white lg:z-0 xs:z-100 left-0 w-full h-full lg:w-auto lg:pl-0 pl-4 transition-all duration-500 ease-in font-blender700 ${open ? "top-12 " : "top-[-1400px]"}`}>
              <li key='home' className="lg:ml-8 2xl:text-2xl xl:text-lg lg:text-md lg:my-0 my-6">
                <Link to='/' onClick={closeNavbar} className="text-gray-800 hover:text-gray-400 duration-500">Home</Link>
              </li>
              <li key='shop' className="lg:ml-8 2xl:text-2xl xl:text-lg lg:text-md lg:my-0 my-6">
                <Link to='/shop' onClick={closeNavbar} className="text-gray-800 hover:text-gray-400 duration-500">Shop</Link>
              </li>
              <li key='about' className="lg:ml-8 2xl:text-2xl xl:text-ms lg:text-md lg:my-0 my-6">
                <Link to='/about' onClick={closeNavbar} className="text-gray-800 hover:text-gray-400 duration-500">About</Link>
              </li>
              <li key='policy' className="lg:ml-8 2xl:text-2xl xl:text-lg lg:text-md lg:my-0 my-6">
                <Link to='/privacy-policy' onClick={closeNavbar} className="text-gray-800 hover:text-gray-400 duration-500">Policies</Link>
              </li>
              <li key='contact' className="lg:ml-8 2xl:text-2xl xl:text-lg lg:text-md lg:my-0 my-6">
                <Link to='/contact' onClick={closeNavbar} className="text-gray-800 hover:text-gray-400 duration-500">Contact</Link>
              </li>

          <button className="md:ml-8 cp-btn cp-btn-yellow">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
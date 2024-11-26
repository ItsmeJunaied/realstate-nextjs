"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div>
        {/* Navbar */}

        <nav className="relative px-4 py-4 flex justify-between items-center bg-[#00000080] h-[70px]  bg-opacity-50  w-full top-0 left-0 z-10">
        <Image
          src="/logo.png"
          alt="Example Image"
          width={40}
          height={60}
          priority
        />
        {/* Burger Button for mobile menu */}
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-white p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        {/* Navbar links (Desktop) */}
        <ul className="hidden lg:flex lg:mx-auto lg:justify-between gap-10  lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link className="text-white text-sm font-light" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white text-sm font-light" href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-white text-sm font-light" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="text-white text-sm font-light" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-white text-sm font-light" href="/contact">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Schedule On Book Button */}
        <a
          className="w-[180px] h-[46px] hidden lg:flex justify-center items-center lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold transition duration-200"
          href="#"
        >
          Schedule On Book
        </a>

        {/* Phone Number */}
        <div className="w-[140px] h-[46px] hidden lg:flex items-center gap-2 py-2 px-6 bg-transparent border-[2px] border-white text-sm text-white font-bold transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
          >
            <path
              d="M12.5568 10.9062L12.1018 11.3591C12.1018 11.3591 11.0188 12.4351 8.0638 9.49716C5.10882 6.55918 6.19181 5.48319 6.19181 5.48319L6.47781 5.19719C7.18481 4.49519 7.25181 3.3672 6.63481 2.54321L5.37482 0.860218C4.61082 -0.159775 3.13584 -0.294774 2.26084 0.57522L0.690852 2.13521C0.257854 2.56721 -0.0321438 3.1252 0.00285598 3.7452C0.0928554 5.33219 0.81085 8.74516 4.81482 12.7271C9.0618 16.9491 13.0468 17.1171 14.6758 16.9651C15.1918 16.9171 15.6398 16.6551 16.0007 16.2951L17.4207 14.8831C18.3807 13.9301 18.1107 12.2951 16.8827 11.6281L14.9728 10.5892C14.1668 10.1522 13.1868 10.2802 12.5568 10.9062Z"
              fill="white"
            />
          </svg>
          <p>16760</p>
        </div>
      </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold leading-none" href="#">
                  <Image
                    src="/logo.png"
                    alt="Example Image"
                    width={30}
                    height={50}
                    priority
                  />
                </a>
                <button className="navbar-close" onClick={toggleMenu}>
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-white rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-white rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-white rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-white rounded"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-white rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="pt-6">
                  <a
                    className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                    href="#"
                  >
                    Sign in
                  </a>
                  <a
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                    href="#"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

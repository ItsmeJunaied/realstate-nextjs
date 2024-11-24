"use client";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/HeaderImg1.png", title: "Redefining Happiness", topic: "ANIMAL" },
    { src: "/HeaderImg2.png", title: "A Piece of Heaven", topic: "ANIMAL" },
    {
      src: "/HeaderImg3.png",
      title: "Reviving You On Steps ",
      topic: "ANIMAL",
    },
    {
      src: "/HeaderImg4.png",
      title: "A Visual Treat You Can",
      topic: "ANIMAL",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto slide logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Set interval for auto slide (2 seconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

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
            <FontAwesomeIcon icon={faPhone} size="sm" className="text-white" />
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

      <div>
        <div className="carousel mt-[80px]">
          {" "}
          {/* Add margin-top to avoid overlap */}
          <div className="list">
            <div className="item">
              <img
                className="bgimg"
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
              />
              <div className="content">
                <div className="author ">SKYMARK</div>
                <div className="title">{images[currentIndex].title}</div>
                {/* <div className="topic">{images[currentIndex].topic}</div> */}
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                  sequi, rem magnam nesciunt minima placeat...
                </div>
                {/* <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="thumbnail">
            {images.map((image, index) => (
              <div className="item" key={index}>
                <img src={image.src} alt={image.title} />
                {/* <div className="content">
                  <div className="title">{image.title}</div>
                  <div className="description">Description</div>
                </div> */}
              </div>
            ))}
          </div>
          <div className="arrows">
            <button id="prev" onClick={handlePrev}>
              {" "}
              &lt;{" "}
            </button>
            <button id="next" onClick={handleNext}>
              {" "}
              &gt;{" "}
            </button>
          </div>
          <div className="time"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

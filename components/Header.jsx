"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  
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

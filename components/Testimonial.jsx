"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import useProducts from '../API/useProducts';

// import data from '../../public/data.json';
import Image from "next/image";

const Testimonial = () => {
  // const [swiperRef, setSwiperRef] = useState(null);
  // const appendNumber = useRef(500);
  // const prependNumber = useRef(1);
  // // Create array with 500 slides
  // const [slides, setSlides] = useState(
  //   Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  // );

  const settings = {
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of slides visible at once (desktop)
    slidesToScroll: 1, // Number of slides to scroll per click
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3-second interval
    responsive: [
      // Breakpoints for responsiveness
      {
        breakpoint: 1024, // For tablets or medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For small screens (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Homeowner’s Reflections",
      image: "/junaied.png", // Random image for this card
      author: "MD Junaied Hossain",
      date: "21 SEP 2015",
      content:
        "Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the.",
    },
    {
      title: "Homeowner’s Reflections",
      image: "/testiIMG.png", // Random image for this card
      author: "MD Junaied Hossain",
      date: "21 SEP 2015",
      content:
        "Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the.",
    },
    {
      title: "Homeowner’s Reflections",
      image: "/testiIMG2.png", // Random image for this card
      author: "MD Junaied Hossain",
      date: "21 SEP 2015",
      content:
        "Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the.",
    },
    {
      title: "Homeowner’s Reflections",
      image: "/junaied.png", // Random image for this card
      author: "MD Junaied Hossain",
      date: "21 SEP 2015",
      content:
        "Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the.",
    },
    {
      title: "Homeowner’s Reflections",
      image: "/testiIMG.png", // Random image for this card
      author: "MD Junaied Hossain",
      date: "21 SEP 2015",
      content:
        "Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the.",
    },
    {
      title: "Homeowner’s Reflections",
      image: "/testiIMG2.png", // Random image for this card
      author: "MD Junaied Hossain",
      date: "21 SEP 2015",
      content:
        "Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the.",
    },
  ];
  

  return (
    <div className=" my-10">
      <p className=" text-[#7c7c7c] text-base font-medium font-['Public Sans'] leading-normal tracking-[2.56px]">
        Testimonial
      </p>
      {/* <h1>Redefining your standard of living</h1> */}
      <div className=" flex flex-row justify-between items-end ">
        <h1 className=" ">
          {/* <span className="text-black text-[40px] font-normal font-['Public Sans'] leading-[60px] p-1">
            Redefining
          </span> */}
          <span className="text-black text-[20px] lg:text-[40px]  font-normal font-['Public Sans'] leading-[60px]">
            {" "}
            What customers say about us
          </span>
        </h1>

        <div className=" flex flex-row gap-2 items-end">
          <div
            style={{
              width: 50,
              height: 50,
              padding: 10,
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              borderRadius: 30,
              border: "1px #D9D9D9 solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="28"
              viewBox="0 0 31 28"
              fill="none"
            >
              <path
                d="M1.55545 14L30.4443 14M1.55545 14L14.5555 1M1.55545 14L14.5555 27"
                stroke="#0F2443"
              />
            </svg>
          </div>
          <div
            style={{
              width: 50,
              height: 50,
              padding: 10,
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              background: "#0F2443",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="28"
              viewBox="0 0 31 28"
              fill="none"
            >
              <path
                d="M29.4445 14L0.555664 14M29.4445 14L16.4445 27M29.4445 14L16.4445 1"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className=" mt-8">
      <Slider {...settings}>
  {slides.map((slide, index) => (
    <div key={index} className="px-4">
      <div className="bg-white shadow-md border border-gray-300 rounded-lg overflow-hidden">
        <h2 className="text-[#0f2443] text-[22px] font-normal px-4 pt-3">
          {slide.title}
        </h2>
        <div className="p-4">
          {/* Only one image per slide, no need to map over images */}
          <Image
            src={slide.image}
            alt={`Testimonial Image ${index}`}
            className="w-full h-[300px] rounded-lg object-cover mb-4"
            width={400}
            height={150}
          />
          <p className="text-sm text-gray-700 mt-4">{slide.content}</p>
          <div className="flex items-center mt-4">
            {/* Use the same image for user image */}
            <Image
              className="w-12 h-12 rounded-full"
              src={slide.image}  // Use the same image for the user image
              alt="User"
              width={48}
              height={48}
            />
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-900">
                {slide.author}
              </h2>
              <span className="text-gray-600 text-sm">{slide.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </div>
  );
};

export default Testimonial;
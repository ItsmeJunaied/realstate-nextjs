"use client";

import Slider from "react-slick";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import React, { useRef, useState } from "react";
// data.js


const projects = [
  {
    id: 1,
    title: "SKYMARK HOMES",
    location: "Bashundhara Residential Area",
    image: "/featureP2.png",
    description: "Explore the luxury and comfort of Skymark Homes.",
  },
  {
    id: 2,
    title: "Flyte SOlutions",
    location: "Gulshan, Dhaka",
    image: "/featureP1.png",
  },
  {
    id: 3,
    title: "GREEN VALLEY",
    location: "Uttara Sector 12",
    image: "/featureP3.png",
    description: "Modern living with a touch of nature.",
  },
  {
    id: 4,
    title: "URBAN PEAKS",
    location: "Dhanmondi 32",
    image: "/featureP1.png",
    description: "An urban oasis in the heart of the city.",
  },
];
const FeaturedProject = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [slides, setSlides] = useState(projects);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };
  const slickSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F8F8F8] px-6 lg:px-16 pt-10">
      <p className="text-[#7c7c7c] text-base font-medium uppercase tracking-[2.56px]">
        FEATURED PROJECTS
      </p>

      <div className=" flex flex-row justify-between items-end">
        <div className="max-w-xl mt-4">
          <span className="text-black text-lg lg:text-4xl font-normal leading-[56px]">
            Bespoke Enclaves with finesse in
          </span>
          <span className="text-white bg-[#0f2443] px-1 text-lg lg:text-4xl font-normal leading-[56px]">
            architecture and design
          </span>
        </div>

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

      <div className=" w-full flex flex-col lg:flex-row mt-8  gap-4">
        {/* tabs */}
        <div className=" lg:w-1/3 w-full h-full mb-16 lg:mb-0">
          <Tabs defaultValue="ongoing" onValueChange={handleTabChange} className="w-[400px]">
            <TabsList className="flex flec-col  justify-start  ">
              <TabsTrigger value="ongoing">Ongoing Projects</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Projects</TabsTrigger>
              <TabsTrigger value="completed">Completed Projects</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        {/* carousal */}

        <div className=" lg:w-2/3 w-full ">
          <Slider {...slickSettings}>
            {slides.map((project) => (
              <div key={project.id}>
                <div className="card w-[400px]">
                  <img src={project.image} alt={project.title} />
                  <div className="card-content">
                    <h2>{project.title}</h2>
                    <div className="flex flex-row items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 11.25C9.38193 11.25 8.77775 11.0667 8.26384 10.7233C7.74994 10.38 7.3494 9.89191 7.11288 9.32089C6.87635 8.74987 6.81447 8.12154 6.93505 7.51534C7.05563 6.90915 7.35325 6.35233 7.79029 5.91529C8.22733 5.47825 8.78415 5.18063 9.39034 5.06005C9.99654 4.93947 10.6249 5.00135 11.1959 5.23788C11.7669 5.4744 12.255 5.87494 12.5983 6.38884C12.9417 6.90275 13.125 7.50693 13.125 8.125C13.124 8.9535 12.7945 9.74778 12.2086 10.3336C11.6228 10.9195 10.8285 11.249 10 11.25ZM10 6.25C9.62916 6.25 9.26665 6.35997 8.95831 6.566C8.64997 6.77202 8.40964 7.06486 8.26773 7.40747C8.12581 7.75008 8.08868 8.12708 8.16103 8.4908C8.23338 8.85451 8.41195 9.1886 8.67418 9.45083C8.9364 9.71305 9.27049 9.89163 9.63421 9.96397C9.99792 10.0363 10.3749 9.99919 10.7175 9.85728C11.0601 9.71536 11.353 9.47504 11.559 9.1667C11.765 8.85835 11.875 8.49584 11.875 8.125C11.8745 7.62787 11.6768 7.15125 11.3253 6.79972C10.9738 6.4482 10.4971 6.2505 10 6.25Z"
                          fill="white"
                        />
                        <path
                          d="M10 18.75L4.7275 12.5319C4.65424 12.4385 4.58174 12.3445 4.51 12.25C3.60982 11.0634 3.12333 9.61443 3.125 8.125C3.125 6.30164 3.84933 4.55295 5.13865 3.26364C6.42796 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.5721 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.8764 9.61372 16.3902 11.0619 15.4906 12.2481L15.49 12.25C15.49 12.25 15.3025 12.4963 15.2744 12.5294L10 18.75ZM5.50813 11.4969C5.50813 11.4969 5.65375 11.6894 5.68688 11.7306L10 16.8175L14.3188 11.7237C14.3463 11.6894 14.4925 11.4956 14.4931 11.495C15.2289 10.5257 15.6265 9.3419 15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4918 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02253 4.14752C4.96764 5.20242 4.375 6.63316 4.375 8.125C4.37346 9.34269 4.77153 10.5272 5.50813 11.4969Z"
                          fill="white"
                        />
                      </svg>
                      <p className="text-white text-sm">{project.location}</p>
                    </div>

                    <div className="w-[140px] h-[46px] mb-5 mt-7 p-2.5 border border-white justify-center items-center gap-2.5 inline-flex">
                      <div className="text-white text-sm font-light font-['Public Sans']">
                        Explore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className=" pb-5">
        <div className=" w-[140px] flex justify-center items-center p-[10px]   border-[1px] border-black ">
          <p>Explore</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;

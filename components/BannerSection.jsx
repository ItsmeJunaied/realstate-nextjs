import Image from "next/image";
import React from "react";

const BannerSection = ({ title, description }) => {
  return (
    <div className=" -mt-[80px]">
      <div className="relative w-full h-[460px]">
        <img
          src="/contactusImg.png"
          alt="Contact Us Image"
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-40 bg-gradient-to-t from-[#0f2443] to-white"></div>

        {/* Text */}
        <div className="absolute top-0 left-10 right-0 bottom-0 flex flex-col justify-center items-start">
          <h1 className="text-white text-6xl font-bold font-['Public Sans'] leading-[120px]">
            {title}
          </h1>

          <p className="text-white text-base text-start font-light font-['Public Sans'] leading-relaxed text-center max-w-[600px] ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

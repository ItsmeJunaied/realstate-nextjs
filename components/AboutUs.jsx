"use client";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" flex flex-col-reverse lg:flex-row justify-between items-center ">
      {/* Left Part */}
      <div className=" flex flex-col gap-4 lg:w-1/2">
        <p className=" text-[#7c7c7c] text-base font-medium font-['Public Sans'] leading-normal tracking-[2.56px]">
          ABOUT US
        </p>
        {/* <h1>Redefining your standard of living</h1> */}
        <h1 className=" ">
          <span className="text-white bg-[#0f2443] text-[40px] font-normal font-['Public Sans'] leading-[60px] p-1">
            Redefining
          </span>
          <span className="text-black text-[40px] font-normal font-['Public Sans'] leading-[60px]">
            {" "}
            your standard of living
          </span>
        </h1>

        <p className=" text-justify text-black text-sm font-light font-['Public Sans'] leading-normal">
          Edison Group was founded in 2009 with the aim to enhance aspects of
          life for people by providing powerful brands, reliable products and a
          wide range of services. It ventured into the real estate sector in
          2015 with its “dream team” dedicated to merge value and innovation in
          the evolving real estate sector of Bangladesh. Through considerable
          focus on design, structural dimension, and feasibility in the sense of
          space and resource conservation; as well as environmental soundness;
          we deliver you optimum support in residential and commercial
          accommodation.
        </p>

        <p className=" text-justify text-black text-sm font-light font-['Public Sans'] leading-normal">
          Conjoining the expertise of different fields to develop and bring in
          the quintessence of contemporary lifestyle, we provide distinguished
          services and strictly maintain project handover deadlines. We assure
          you to be your most reliable developer in Dhaka in terms of integrity
          and credibility.
        </p>
        <button className=" flex justify-start mb-5">
          <div className="w-40 h-[46px] p-2.5 border border-[#0f2443] justify-center items-center gap-2.5 inline-flex mb-4">
            <p className="text-[#0f2443]  text-sm font-light font-['Public Sans']">
              Learn More
            </p>
          </div>
        </button>
      </div>

      {/* right part */}

      <div className="lg:w-1/2 flex justify-center items-center relative">
        {/* Image */}
        <Image
          src="/AboutUsImg.png"
          width={500}
          height={500}
          alt="About US Image"
          priority
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />

        {/* Play Button (SVG) */}
        <div className="absolute inset-0 flex justify-center items-center">
          <svg id="play" viewBox="0 0 163 163">
            <g fill="none">
              <g transform="translate(2.000000, 2.000000)" strokeWidth="4">
                <path
                  d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11"
                  id="lineOne"
                  stroke="#ffffff"
                ></path>
                <path
                  d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z"
                  id="triangle"
                  stroke="#ffffff"
                ></path>
                <path
                  d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159"
                  id="lineTwo"
                  stroke="#ffffff"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

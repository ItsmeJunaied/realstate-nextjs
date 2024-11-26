"use client";
import AboutUs from "@/components/AboutUs";
import BannerSection from "@/components/BannerSection";
import CommingSoon from "@/components/CommingSoon";
import Footer from "@/components/Footer";
import ManagementTeam from "@/components/ManagementTeam";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {  
    const title = "About Skymark Developments";
    const description =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  
    return (
      <div>
        <Navbar />
        <BannerSection title={title} description={description} />
        <div className="">
          {/* About us */}
          <div className=" my-[46px] mx-[40px]">
          <AboutUs />

          </div>
  
          {/* Management team */}
          <div className=" bg-[#F8F8F8] p-[40px]">
            <p className="text-[#7c7c7c] text-base font-medium leading-normal tracking-[2.56px] marker:">
              Management Team
            </p>
            <h1 className=" max-w-[626px]">
              <span className="text-black text-[40px] font-normal leading-[60px]">
                Bespoke Enclaves with finesse in
              </span>
              <span className="text-white bg-[#0f2443] text-[40px] font-normal leading-[60px] p-1">
                architecture and design
              </span>
            </h1>

            <ManagementTeam/>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Page;
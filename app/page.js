import AboutUs from "@/components/AboutUs";
import React from "react";
import "./globals.css";
import FeaturedProject from "@/components/FeaturedProject";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Header/>
      <div className=" px-16 pt-10">
        <AboutUs />
      </div>

      <FeaturedProject />
      <div className=" px-16 pt-10">
        {" "}
        <Testimonial />
      </div>
      <Footer/>
    </div>
  );
};

export default page;


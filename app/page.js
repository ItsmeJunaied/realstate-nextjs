import AboutUs from "@/components/AboutUs";
import React from "react";
import "./globals.css";
import FeaturedProject from "@/components/FeaturedProject";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>

      <Navbar/>
      <Header/>
      <div className=" px-16 pt-10">
        <AboutUs />
      </div>

      <FeaturedProject />
      <div className=" px-2 lg:px-16 pt-10">
        {" "}
        <Testimonial />
      </div>
      <Footer/>
    </div>
  );
};

export default page;


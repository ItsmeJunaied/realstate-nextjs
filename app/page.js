import AboutUs from '@/components/AboutUs';
import React from 'react';
import "./globals.css";
import FeaturedProject from '@/components/FeaturedProject';

const page = () => {
  return (
    <div>
      <AboutUs></AboutUs>
      <FeaturedProject/>
    </div>
  );
};

export default page;
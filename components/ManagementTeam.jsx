"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample JSON Data (You can also import this from an external file)
const teamData = [
  {
    name: "MR. Kamrul Ahsan",
    position: "Chairman & CEO",
    image: "/manager1.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "MR. Junaied Hossain",
    position: "Chief Operating Officer",
    image: "/junaied.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "MR. Junaied",
    position: "Chief Financial Officer",
    image: "/junaied2.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "MR. Mark Johnson",
    position: "VP of Technology",
    image: "/testiIMG.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "MR. Alice Brown",
    position: "VP of Marketing",
    image: "/testiIMG2.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "MR. Bob White",
    position: "VP of Sales",
    image: "/manager1.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const ManagementTeam = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1545, // When screen is smaller than 1545px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1020, // When screen is smaller than 1020px
        settings: {
          slidesToShow: 2, // Change this based on your desired layout for smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For even smaller screens (tablets or phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320, // For the smallest screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-5 slider-container ">
      <Slider {...settings}>
        {teamData.map((teamMember, index) => (
          <div key={index}>
            <div className="w-[400px] h-[500px] relative group ">
              {/* Image with grayscale and smooth hover transition */}
              <img
                className="w-full h-full object-cover grayscale transition-filter duration-500 group-hover:grayscale-0"
                src={teamMember.image}
                alt={teamMember.name}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

              {/* Text content at the bottom */}
              <div className="absolute bottom-4 left-8 text-white flex flex-col gap-1 transition-all duration-300 group-hover:bottom-14 group-hover:left-9">
                <div className="text-xl font-normal leading-snug">
                  {teamMember.name}
                </div>
                <div className="text-base font-extralight leading-snug">
                  {teamMember.position}
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="absolute bottom-4 left-8 flex flex-row items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-8 group-hover:translate-y-0">
                <a
                  href={teamMember.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a
                  href={teamMember.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6.93994 5.00002C6.93968 5.53046 6.72871 6.03906 6.35345 6.41394C5.97819 6.78883 5.46937 6.99929 4.93894 6.99902C4.40851 6.99876 3.89991 6.78779 3.52502 6.41253C3.15014 6.03727 2.93968 5.52846 2.93994 4.99802C2.94021 4.46759 3.15117 3.95899 3.52644 3.5841C3.9017 3.20922 4.41051 2.99876 4.94094 2.99902C5.47137 2.99929 5.97998 3.21026 6.35486 3.58552C6.72975 3.96078 6.94021 4.46959 6.93994 5.00002ZM6.99994 8.48002H2.99994V21H6.99994V8.48002ZM13.3199 8.48002H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.90002 14.9399 7.13002 13.2799 10.16L13.3199 8.48002Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a
                  href={teamMember.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.8902 7.34001C19.8002 7.67001 19.4002 8.50001 18.7202 9.29001C18.2702 17.97 9.85024 20.79 4.08024 17.88C3.29024 16.83 6.93024 17.26 8.26024 15.25C3.23024 12.68 3.63024 5.81001 4.64024 6.09001C7.01024 9.28001 10.8302 9.57001 11.4502 9.28001C11.4502 8.55001 11.1402 6.96001 12.8602 5.63001C13.8502 4.92001 15.9202 4.29001 17.7902 6.32001C18.1102 6.53001 18.5702 6.62001 19.2602 6.47001C19.6702 6.26001 20.2102 6.40001 19.9302 7.13001L19.8902 7.34001Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ManagementTeam;

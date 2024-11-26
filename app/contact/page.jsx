"use client";
import BannerSection from "@/components/BannerSection";
import CommingSoon from "@/components/CommingSoon";
import ContactUsForm from "@/components/ContactUsForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
    const title= "Contact with Skymark"
    const description= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  return (
    <div>
      <Navbar />
      <BannerSection title={title} description={description}  />
      {/* Description */}
      <div className=" flex flex-col-reverse lg:flex-row justify-between items-start gap-10 my-[46px] mx-[40px]">
        <div className=" w-full lg:w-1/2 flex flex-col-reverse lg:flex-row justify-between items-start gap-10  ">
          {/* Left */}
          <div className=" flex flex-col gap-4 ">
            <p className=" text-[#7c7c7c] text-base font-medium font-['Public Sans'] leading-normal tracking-[2.56px] uppercase">
              Contact US
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

            <div className=" flex flex-row justify-start items-center gap-2  px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M15 16.875C14.0729 16.875 13.1666 16.6001 12.3958 16.085C11.6249 15.5699 11.0241 14.8379 10.6693 13.9813C10.3145 13.1248 10.2217 12.1823 10.4026 11.273C10.5834 10.3637 11.0299 9.5285 11.6854 8.87294C12.341 8.21738 13.1762 7.77094 14.0855 7.59007C14.9948 7.4092 15.9373 7.50203 16.7938 7.85682C17.6504 8.2116 18.3824 8.81241 18.8975 9.58327C19.4126 10.3541 19.6875 11.2604 19.6875 12.1875C19.686 13.4302 19.1917 14.6217 18.3129 15.5004C17.4342 16.3792 16.2427 16.8735 15 16.875ZM15 9.375C14.4437 9.375 13.9 9.53995 13.4375 9.84899C12.9749 10.158 12.6145 10.5973 12.4016 11.1112C12.1887 11.6251 12.133 12.1906 12.2415 12.7362C12.3501 13.2818 12.6179 13.7829 13.0113 14.1762C13.4046 14.5696 13.9057 14.8374 14.4513 14.946C14.9969 15.0545 15.5624 14.9988 16.0763 14.7859C16.5902 14.573 17.0295 14.2126 17.3385 13.75C17.6476 13.2875 17.8125 12.7438 17.8125 12.1875C17.8118 11.4418 17.5152 10.7269 16.9879 10.1996C16.4606 9.6723 15.7457 9.37575 15 9.375Z"
                  fill="#0F2443"
                />
                <path
                  d="M15 28.125L7.09126 18.7978C6.98136 18.6578 6.87261 18.5168 6.76501 18.375C5.41473 16.5951 4.68499 14.4216 4.68751 12.1875C4.68751 9.45246 5.774 6.82943 7.70797 4.89546C9.64194 2.96149 12.265 1.875 15 1.875C17.735 1.875 20.3581 2.96149 22.292 4.89546C24.226 6.82943 25.3125 9.45246 25.3125 12.1875C25.3147 14.4206 24.5853 16.5929 23.2359 18.3722L23.235 18.375C23.235 18.375 22.9538 18.7444 22.9116 18.7941L15 28.125ZM8.26219 17.2453C8.26219 17.2453 8.48063 17.5341 8.53032 17.5959L15 25.2263L21.4781 17.5856C21.5194 17.5341 21.7388 17.2434 21.7397 17.2425C22.8433 15.7886 23.4397 14.0129 23.4375 12.1875C23.4375 9.94974 22.5486 7.80362 20.9662 6.22129C19.3839 4.63895 17.2378 3.75 15 3.75C12.7622 3.75 10.6161 4.63895 9.03379 6.22129C7.45145 7.80362 6.56251 9.94974 6.56251 12.1875C6.56019 14.014 7.1573 15.7909 8.26219 17.2453Z"
                  fill="#0F2443"
                />
              </svg>

              <p className=" max-w-[358px]">
                Rangs Babylonia, Level 9 & 10, 246, Bir Uttam Mir Shawkat Road,
                Tejgaon I/A, Dhaka-1208
              </p>
            </div>

            <div className=" flex flex-row justify-start items-center gap-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M18.952 17.7844L18.4464 18.2878C18.4464 18.2878 17.2431 19.4833 13.9598 16.2189C10.6765 12.9545 11.8798 11.7589 11.8798 11.7589L12.1976 11.4411C12.9831 10.6611 13.0576 9.40781 12.372 8.49226L10.972 6.62227C10.1231 5.48895 8.48426 5.33895 7.51205 6.30561L5.76761 8.03893C5.2865 8.51893 4.96428 9.13892 5.00317 9.82781C5.10317 11.5911 5.90094 15.3833 10.3498 19.8077C15.0687 24.4988 19.4964 24.6855 21.3064 24.5166C21.8797 24.4633 22.3775 24.1722 22.7786 23.7722L24.3564 22.2033C25.423 21.1444 25.123 19.3277 23.7586 18.5866L21.6364 17.4322C20.7408 16.9466 19.652 17.0889 18.952 17.7844Z"
                  fill="#0F2443"
                />
              </svg>

              <p className="text-black text-base font-extralight font-['Public Sans'] leading-relaxed">
                16760
              </p>
            </div>

            <div className=" flex flex-row justify-start items-center gap-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M18.952 17.7844L18.4464 18.2878C18.4464 18.2878 17.2431 19.4833 13.9598 16.2189C10.6765 12.9545 11.8798 11.7589 11.8798 11.7589L12.1976 11.4411C12.9831 10.6611 13.0576 9.40781 12.372 8.49226L10.972 6.62227C10.1231 5.48895 8.48426 5.33895 7.51205 6.30561L5.76761 8.03893C5.2865 8.51893 4.96428 9.13892 5.00317 9.82781C5.10317 11.5911 5.90094 15.3833 10.3498 19.8077C15.0687 24.4988 19.4964 24.6855 21.3064 24.5166C21.8797 24.4633 22.3775 24.1722 22.7786 23.7722L24.3564 22.2033C25.423 21.1444 25.123 19.3277 23.7586 18.5866L21.6364 17.4322C20.7408 16.9466 19.652 17.0889 18.952 17.7844Z"
                  fill="#0F2443"
                />
              </svg>

              <p className="text-black text-base font-extralight font-['Public Sans'] leading-relaxed">
                +8801708080822
              </p>
            </div>
            <div className=" flex flex-row justify-start items-center gap-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M24.2053 23.65C24.7546 23.6508 25.2207 23.4596 25.5931 23.0766C25.9653 22.6938 26.15 22.2161 26.15 21.6543V9.34686V9.34665C26.1492 8.785 25.9646 8.30747 25.5932 7.9247C25.2215 7.54154 24.7554 7.35 24.2056 7.35L7.79444 7.35L7.79422 7.35C7.24521 7.35082 6.77934 7.54232 6.40701 7.92446C6.03468 8.3066 5.85 8.78435 5.85 9.34686L5.85 21.6531L5.85 21.6534C5.85079 22.2164 6.03537 22.6944 6.4069 23.0766C6.77868 23.459 7.24512 23.65 7.79556 23.65H24.2053ZM24.2053 23.65L24.2056 23.5M24.2053 23.65H24.2056V23.5M24.2056 23.5H7.79556C7.2837 23.5 6.85667 23.324 6.51444 22.972C6.17222 22.62 6.00074 22.1804 6 21.6531V9.34686C6 8.82038 6.17148 8.38114 6.51444 8.02914C6.85741 7.67714 7.28407 7.50076 7.79444 7.5H24.2056C24.7167 7.5 25.1433 7.67638 25.4856 8.02914C25.8278 8.3819 25.9993 8.82114 26 9.34686V21.6543C26 22.18 25.8285 22.6192 25.4856 22.972C25.1426 23.3248 24.7159 23.5008 24.2056 23.5ZM15.9163 15.757L16 15.8133L16.0837 15.757L24.7389 9.93482V21.6531C24.7389 21.8249 24.6867 21.9545 24.5891 22.0549C24.4917 22.155 24.3681 22.2071 24.2056 22.2071H7.79556C7.63213 22.2071 7.50815 22.1549 7.41088 22.0549C7.31318 21.9544 7.26111 21.8251 7.26111 21.6543V9.93594L15.9163 15.757ZM16 14.1767L7.94756 8.79286H24.0524L16 14.1767Z"
                  fill="#0F2443"
                  stroke="black"
                  strokeWidth="0.3"
                />
              </svg>

              <p className="text-black text-base font-extralight font-['Public Sans'] leading-relaxed">
                hello@edisonrealestatebd.com
              </p>
            </div>
            <Image
              src="/googleMap.png"
              alt="map img"
              width={1000}
              height={200}
              priority
              className="h-[300px]"
            />
          </div>

        </div>

        {/* Contact Form */}

        <div className=" w-full lg:w-1/2 bg-[#F8F8F8] p-[30px]">
          <h1 className=" text-black text-[26px] font-semibold font-['Public Sans'] leading-[30px]">
            Contact Us
          </h1>

          <ContactUsForm/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

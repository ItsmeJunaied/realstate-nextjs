import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className=" footer-img bg-black p-10 px-16 pt-10 ">
      <div className=" flex flex-col lg:flex-row justify-between items-start">
        <div className="  flex flex-col justify-start items-start gap-2 ">
          {/* first */}
          <div>
            {/* hotline */}
            <div className="w-[140px] h-[46px] hidden lg:flex items-center gap-2 py-2 px-2 bg-transparent border-[2px] border-white text-sm text-white font-bold transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.7424 15.208L16.1357 15.812C16.1357 15.812 14.6917 17.2466 10.7517 13.3293C6.81176 9.41199 8.25575 7.97734 8.25575 7.97734L8.63708 7.59601C9.57974 6.66001 9.66908 5.15602 8.84642 4.05736L7.16643 1.81338C6.14777 0.453389 4.18111 0.27339 3.01446 1.43338L0.921135 3.51337C0.343806 4.08936 -0.0428584 4.83336 0.00380797 5.66002C0.123807 7.77601 1.08113 12.3266 6.41976 17.6359C12.0824 23.2652 17.3957 23.4892 19.5677 23.2866C20.2557 23.2226 20.853 22.8732 21.3343 22.3932L23.2277 20.5106C24.5076 19.2399 24.1476 17.0599 22.5103 16.1706L19.9637 14.7853C18.889 14.2026 17.5824 14.3733 16.7424 15.208Z"
                  fill="white"
                />
              </svg>
              <p className=" ">16760</p>
            </div>

            {/* our number */}
            <div className="w-[140px] h-[46px] hidden lg:flex justify-start items-center gap-2 py-2  bg-transparent  text-sm text-white font-bold transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M12.5568 10.9062L12.1018 11.3591C12.1018 11.3591 11.0188 12.4351 8.0638 9.49716C5.10882 6.55918 6.19181 5.48319 6.19181 5.48319L6.47781 5.19719C7.18481 4.49519 7.25181 3.3672 6.63481 2.54321L5.37482 0.860218C4.61082 -0.159775 3.13584 -0.294774 2.26084 0.57522L0.690852 2.13521C0.257854 2.56721 -0.0321438 3.1252 0.00285598 3.7452C0.0928554 5.33219 0.81085 8.74516 4.81482 12.7271C9.0618 16.9491 13.0468 17.1171 14.6758 16.9651C15.1918 16.9171 15.6398 16.6551 16.0007 16.2951L17.4207 14.8831C18.3807 13.9301 18.1107 12.2951 16.8827 11.6281L14.9728 10.5892C14.1668 10.1522 13.1868 10.2802 12.5568 10.9062Z"
                  fill="white"
                />
              </svg>
              <p>58816306-11</p>
            </div>

            {/* third */}
            <div className=" flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M1.616 16.5C1.15533 16.5 0.771 16.324 0.463 15.972C0.155 15.62 0.000666667 15.1804 0 14.6531V2.34686C0 1.82038 0.154333 1.38114 0.463 1.02914C0.771667 0.677143 1.15567 0.500762 1.615 0.5H16.385C16.845 0.5 17.229 0.676381 17.537 1.02914C17.845 1.3819 17.9993 1.82114 18 2.34686V14.6543C18 15.18 17.8457 15.6192 17.537 15.972C17.2283 16.3248 16.8443 16.5008 16.385 16.5H1.616ZM9 8.63257L1 2.65429V14.6543C1 14.8592 1.05767 15.0276 1.173 15.1594C1.28833 15.2912 1.436 15.3571 1.616 15.3571H16.385C16.5643 15.3571 16.7117 15.2912 16.827 15.1594C16.9423 15.0276 17 14.8589 17 14.6531V2.65314L9 8.63257ZM9 7.35714L16.692 1.64286H1.308L9 7.35714ZM1 2.65429V1.64286V14.6543C1 14.8592 1.05767 15.0276 1.173 15.1594C1.28833 15.2912 1.436 15.3571 1.616 15.3571H1V2.65429Z"
                  fill="white"
                />
              </svg>
              <p className="text-white text-base font-light font-['Public Sans'] underline">
                hello@edisonrealestatebd.com
              </p>
            </div>
          </div>
        </div>

        {/* quick Access */}

        <div className=" flex flex-col justify-start gap-2">
          <p className="text-white text-base font-medium font-['Public Sans'] leading-10">
            Quick Access
          </p>
          <p className="text-white text-sm font-light font-['Public Sans'] leading-10">
            About US
          </p>
          <p className="text-white text-sm font-light font-['Public Sans'] leading-10">
            Projects
          </p>
          <p className="text-white text-sm font-light font-['Public Sans'] leading-10">
            Blog
          </p>
          <p className="text-white text-sm font-light font-['Public Sans'] leading-10">
            Contact US
          </p>
          <p className="text-white text-sm font-light font-['Public Sans'] leading-10">
            Schedule on Book
          </p>
        </div>

        {/* interested books */}

        <div className=" flex flex-col justify-start gap-4">
          <h1 className="text-white text-xl font-medium font-['Public Sans'] leading-10">
            Interested To Book?
          </h1>
          <p className="w-[347px] text-white text-sm font-light font-['Public Sans'] leading-tight">
            Please provide your phone number, our representative will contact
            you.
          </p>
          <div className="w-[300px] h-[54px] p-2.5 rounded-md border border-[#d9d9d9]/50 justify-start items-center gap-3 inline-flex">
            <div className="grow shrink basis-0 text-[#d9d9d9] text-sm font-light font-['Public Sans'] leading-tight">
              Email address
            </div>
            <div className="w-[62px] h-12 px-1.5 bg-[#00398f] rounded-md justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-light font-['Public Sans'] leading-10">
                Send
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row justify-between items-end">
        <div className=" flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="28"
            viewBox="0 0 17 28"
            fill="none"
          >
            <path
              d="M15.3 1H11.4C9.67609 1 8.02279 1.68482 6.80381 2.90381C5.58482 4.12279 4.9 5.77609 4.9 7.5V11.4H1V16.6H4.9V27H10.1V16.6H14L15.3 11.4H10.1V7.5C10.1 7.15522 10.237 6.82456 10.4808 6.58076C10.7246 6.33696 11.0552 6.2 11.4 6.2H15.3V1Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="24"
            viewBox="0 0 29 24"
            fill="none"
          >
            <path
              d="M1.2998 20.4501C3.5943 21.7774 6.258 22.4001 9.0998 22.4001C17.5238 22.4001 24.3904 15.722 24.6894 7.3695L27.2998 2.2501L22.9396 2.9001C21.9896 2.06228 20.7665 1.60002 19.4998 1.6001C16.1562 1.6001 13.6498 4.8722 14.4558 8.0741C9.8382 8.3731 5.6535 5.5274 3.2329 1.7366C1.6261 7.1927 3.1159 13.7629 7.1498 17.8124C7.1498 19.3412 3.2498 20.2538 1.2998 20.4501Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
          >
            <path
              d="M1.2998 14C1.2998 7.87221 1.2998 4.80695 3.20328 2.90347C5.10675 1 8.17065 1 14.2998 1C20.4276 1 23.4929 1 25.3963 2.90347C27.2998 4.80695 27.2998 7.87084 27.2998 14C27.2998 20.1278 27.2998 23.1931 25.3963 25.0965C23.4929 27 20.429 27 14.2998 27C8.17202 27 5.10675 27 3.20328 25.0965C1.2998 23.1931 1.2998 20.1292 1.2998 14Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.8368 6.47314H21.8231M20.4574 13.9995C20.4574 15.6326 19.8086 17.1989 18.6538 18.3537C17.499 19.5086 15.9327 20.1574 14.2995 20.1574C12.6663 20.1574 11.1 19.5086 9.94521 18.3537C8.79038 17.1989 8.1416 15.6326 8.1416 13.9995C8.1416 12.3663 8.79038 10.8 9.94521 9.64517C11.1 8.49034 12.6663 7.84157 14.2995 7.84157C15.9327 7.84157 17.499 8.49034 18.6538 9.64517C19.8086 10.8 20.4574 12.3663 20.4574 13.9995Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRulee="evenodd"
              d="M3.78761 0C2.86259 0 1.97545 0.367464 1.32136 1.02155C0.667269 1.67564 0.299805 2.56278 0.299805 3.4878C0.299805 4.41283 0.667269 5.29997 1.32136 5.95406C1.97545 6.60815 2.86259 6.97561 3.78761 6.97561C4.71263 6.97561 5.59977 6.60815 6.25386 5.95406C6.90795 5.29997 7.27541 4.41283 7.27541 3.4878C7.27541 2.56278 6.90795 1.67564 6.25386 1.02155C5.59977 0.367464 4.71263 0 3.78761 0ZM2.20224 3.4878C2.20224 3.06734 2.36927 2.6641 2.66659 2.36678C2.9639 2.06947 3.36714 1.90244 3.78761 1.90244C4.20807 1.90244 4.61132 2.06947 4.90863 2.36678C5.20595 2.6641 5.37298 3.06734 5.37298 3.4878C5.37298 3.90827 5.20595 4.31151 4.90863 4.60883C4.61132 4.90614 4.20807 5.07317 3.78761 5.07317C3.36714 5.07317 2.9639 4.90614 2.66659 4.60883C2.36927 4.31151 2.20224 3.90827 2.20224 3.4878ZM0.299805 8.56098C0.299805 8.3087 0.400022 8.06675 0.57841 7.88836C0.756799 7.70997 0.998745 7.60976 1.25102 7.60976H6.32419C6.57647 7.60976 6.81842 7.70997 6.99681 7.88836C7.1752 8.06675 7.27541 8.3087 7.27541 8.56098V25.0488C7.27541 25.3011 7.1752 25.543 6.99681 25.7214C6.81842 25.8998 6.57647 26 6.32419 26H1.25102C0.998745 26 0.756799 25.8998 0.57841 25.7214C0.400022 25.543 0.299805 25.3011 0.299805 25.0488V8.56098ZM2.20224 9.51219V24.0976H5.37298V9.51219H2.20224ZM9.17785 8.56098C9.17785 8.3087 9.27807 8.06675 9.45646 7.88836C9.63485 7.70997 9.87679 7.60976 10.1291 7.60976H15.2022C15.4545 7.60976 15.6965 7.70997 15.8749 7.88836C16.0532 8.06675 16.1535 8.3087 16.1535 8.56098V9.11141L16.7052 8.87424C17.6565 8.46789 18.6656 8.21325 19.6958 8.11961C23.2153 7.8 26.2998 10.5649 26.2998 14.1161V25.0488C26.2998 25.3011 26.1996 25.543 26.0212 25.7214C25.8428 25.8998 25.6009 26 25.3486 26H20.2754C20.0231 26 19.7812 25.8998 19.6028 25.7214C19.4244 25.543 19.3242 25.3011 19.3242 25.0488V16.1707C19.3242 15.7503 19.1572 15.347 18.8599 15.0497C18.5625 14.7524 18.1593 14.5854 17.7388 14.5854C17.3184 14.5854 16.9151 14.7524 16.6178 15.0497C16.3205 15.347 16.1535 15.7503 16.1535 16.1707V25.0488C16.1535 25.3011 16.0532 25.543 15.8749 25.7214C15.6965 25.8998 15.4545 26 15.2022 26H10.1291C9.87679 26 9.63485 25.8998 9.45646 25.7214C9.27807 25.543 9.17785 25.3011 9.17785 25.0488V8.56098ZM11.0803 9.51219V24.0976H14.251V16.1707C14.251 15.2457 14.6185 14.3586 15.2726 13.7045C15.9267 13.0504 16.8138 12.6829 17.7388 12.6829C18.6639 12.6829 19.551 13.0504 20.2051 13.7045C20.8592 14.3586 21.2266 15.2457 21.2266 16.1707V24.0976H24.3974V14.1161C24.3974 11.7013 22.2907 9.79376 19.8696 10.0144C19.0377 10.0899 18.2229 10.2953 17.4547 10.6232L15.5777 11.4286C15.4329 11.4908 15.2749 11.516 15.118 11.5021C14.961 11.4881 14.81 11.4354 14.6785 11.3486C14.5469 11.2618 14.439 11.1438 14.3644 11.005C14.2898 10.8662 14.2508 10.711 14.251 10.5535V9.51219H11.0803Z"
              fill="white"
            />
          </svg>
        </div>

        <div>
          <Image
            src="/logo.png"
            alt="Example Image"
            width={70}
            height={100}
            priority
          />
        </div>

        <div></div>
      </div>
      <div className=" my-5">
        <Separator />
      </div>

      <div className=" flex justify-center items-center">
        <p className="text-white text-sm font-extralight font-['Public Sans'] ">
          Copyright ©2024 Edison Real State. All Right Reserved. Designed &
          Developed by Flyte Solutions Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;

"use client"
import { useEffect, useState } from "react";

const CommingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      let dest = new Date("Mar 31, 2024 23:59:59").getTime();
      let now = new Date().getTime();
      let diff = dest - now;

      if (diff <= 0) {
        // If countdown ends, reset to the next month or year
        let nextMonthDate = new Date();
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
        if (nextMonthDate.getMonth() === 0) {
          nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
        }
        dest = nextMonthDate.getTime();
        diff = dest - now;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      );
      const hours = String(
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
        2,
        "0"
      );

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, []);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-gray-900 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
          <div className="flex-col justify-end items-center lg:gap-16 gap-10 flex">
            <img
              src="/logo.png"
              alt=" logo image"
              className="object-cover"
            />
            <div className="flex-col justify-center items-center gap-10 flex">
              <div className="flex-col justify-start items-center gap-2.5 flex">
                <h2 className="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">
                  Coming Soon
                </h2>
                <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Just 20 days remaining until the big reveal of our new product!
                </p>
              </div>
              <div className="flex items-start justify-center w-full gap-2 count-down-main">
                <div className="timer flex flex-col gap-0.5">
                  <h3 className="countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9">
                    {timeLeft.days}
                  </h3>
                  <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                    DAYS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <h3 className="countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9">
                    {timeLeft.hours}
                  </h3>
                  <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                    HRS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <h3 className="countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9">
                    {timeLeft.minutes}
                  </h3>
                  <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                    MINS
                  </p>
                </div>
                <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <h3 className="countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9">
                    {timeLeft.seconds}
                  </h3>
                  <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">
                    SECS
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-center gap-5 flex">
                <h6 className="text-center text-emerald-400 text-base font-semibold leading-relaxed">
                  Launched Date: December 01, 2024
                </h6>
                <div className="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                  <input
                    type="text"
                    className="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex"
                    placeholder="Type your mail..."
                  />
                  <button className="sm:w-fit w-full px-3.5 py-2 bg-emerald-400 hover:bg-emerald-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">
                      Notify Me
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm font-normal leading-snug">
            Get in touch with us:{" "}
            <a
              href="mailto:mail@pagedone.com"
              className="hover:text-gray-100 transition-all duration-700 ease-in-out"
            >
              info@flytesolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommingSoon;


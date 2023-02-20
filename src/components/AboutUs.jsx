import React from "react";
import { FaAward, FaTelegramPlane } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="w-full pb-8 md:p-6 lg:p-20 bg-gray-100">
      <div className="w-full flex flex-col lg:flex-row justify-center md:items-center lg:items-end gap-8">
        {/* Left Content */}
        <div className="w-full md:w-full lg:w-1/2 flex flex-col gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjB0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="max-w-xs md:max-w-md rounded -mt-6 md:-mt-16 lg:-mt-32 shadow-md"
          />
          <div className="w-full flex justify-center items-center gap-5 md:gap-8">
            <span className="flex justify-end md:justify-start items-start md:items-center gap-2">
              <FaAward className="text-4xl md:text-5xl text-green-500" />
              <div className="w-1/2 md:w-full">
                <h3 className="text-3xl md:text-4xl font-bold">25</h3>
                <p className="md:w-full text-sm md:text-base text-gray-500 font-medium">
                  Years of Experience
                </p>
              </div>
            </span>
            <span className="w-fit flex justify-start items-start md:items-center gap-2">
              <FaTelegramPlane className="text-4xl md:text-5xl text-green-500" />
              <div className="w-1/2 md:w-full">
                <h3 className="text-3xl md:text-4xl font-bold">350</h3>
                <p className="md:w-full text-sm md:text-base text-gray-500 font-medium">
                  Completed Projects
                </p>
              </div>
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-1 md:gap-3 text-center lg:text-left px-8 md:px-0">
          <h3 className=" text-green-500 font-bold text-xl">About Us</h3>
          <h1 className="md:w-10/12 lg:max-w-md text-3xl md:text-5xl font-bold ">
            Discover The World of Financial Planner
          </h1>
          <p className="w-full md:w-9/12 lg:max-w-md ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi
            beatae repudiandae numquam molestiae doloribus quibusdam nesciunt
            doloremque, dolore non?
          </p>
          <button className="px-6 py-2 md:py-3 bg-green-500 text-white font-semibold text-xs md:text-sm rounded-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

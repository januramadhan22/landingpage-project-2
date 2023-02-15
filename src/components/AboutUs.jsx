import React from "react";
import { FaAward, FaTelegramPlane } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="w-full p-20 bg-gray-100">
      <div className="w-full flex justify-center items-end gap-8">
        {/* Left Content */}
        <div className="w-1/2 flex flex-col gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjB0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="max-w-md rounded -mt-32 shadow-md"
          />
          <div className="w-full flex justify-center items-center gap-8">
            <span className="flex items-center gap-2">
              <FaAward className="text-5xl text-green-500" />
              <div>
                <h3 className="text-4xl font-bold">25</h3>
                <p className="text-gray-500 font-medium">Years of Experience</p>
              </div>
            </span>
            <span className="flex items-center gap-2">
              <FaTelegramPlane className="text-5xl text-green-500" />
              <div>
                <h3 className="text-4xl font-bold">350</h3>
                <p className="text-gray-500 font-medium"> Completed Projects</p>
              </div>
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-1/2 space-y-3">
          <h3 className=" text-green-500 font-bold text-xl">About Us</h3>
          <h1 className="max-w-md text-5xl font-bold">
            Discover The World of Financial Planner
          </h1>
          <p className="max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi
            beatae repudiandae numquam molestiae doloribus quibusdam nesciunt
            doloremque, dolore non?
          </p>
          <button className="px-6 py-3 bg-green-500 text-white font-semibold text-sm rounded-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

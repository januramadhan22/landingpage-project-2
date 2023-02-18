import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

function NewsItem() {
  return (
    <div className="w-full bg-white shadow-md rounded">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGN1c3RvbWVyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-full object-cover"
      />
      <div className="w-full p-4 lg:p-8 space-y-3">
        <p className="font-medium text-gray-500 text-xs md:text-sm flex items-center gap-2">
          <FaRegCalendarAlt /> October 30, 2022
        </p>
        <h3 className="text-lg md:text-xl font-bold text-gray-700">
          How to Start a Successful SaaS Company in 2022
        </h3>
        <p className="text-xs md:text-base font-medium text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam labore
          odit reiciendis eum non, reprehenderit at aspernatur ratione eius
          commodi!
        </p>
        <button className="w-fit mt-4 px-6 py-2 md:py-2.5 text-white text-xs uppercase font-medium rounded-sm bg-green-500 hover:bg-green-700">
          Read More
        </button>
      </div>
    </div>
  );
}

export default NewsItem;

import React from "react";
import { TbReportSearch, TbBusinessplan } from "react-icons/tb";
import { AiOutlineBarChart } from "react-icons/ai";

function ServicesItem({ title, isDesc, value }) {
  return (
    <>
      {isDesc ? (
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-green-500 font-semibold text-base md:text-lg">
            {title}
          </h3>
          <h1 className="text-xl md:text-2xl font-bold">What We Offer</h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            corporis, ullam amet rerum veniam perspiciatis!
          </p>
          <button className="w-fit mt-4 px-6 py-2 md:py-2.5 text-white text-xs uppercase font-medium rounded-sm bg-green-500 hover:bg-green-700">
            View All
          </button>
        </div>
      ) : (
        <div
          id="serviceItem"
          className="group space-y-2 text-center border-b-[3px] p-2.5 md:p-4 lg:p-8 text-gray-500 border-b-green-500 rounded-sm hover:bg-green-500 shadow-md transition ease-linear duration-200"
        >
          <span
            key={value}
            className="w-full flex justify-center text-3xl md:text-5xl text-green-500 group-hover:text-white"
          >
            {value === 1 ? (
              <TbBusinessplan />
            ) : value === 2 ? (
              <TbReportSearch />
            ) : value === 3 ? (
              <AiOutlineBarChart />
            ) : value === 4 ? (
              <TbBusinessplan />
            ) : (
              <AiOutlineBarChart />
            )}
          </span>
          <h3 className="text-base md:text-lg font-semibold text-black group-hover:text-white">
            {title}
          </h3>
          <p className="text-xs md:text-sm group-hover:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
            deleniti debitis adipisci assumenda doloremque totam?
          </p>
        </div>
      )}
    </>
  );
}

export default ServicesItem;

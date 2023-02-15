import React from "react";
import { TbReportSearch, TbBusinessplan } from "react-icons/tb";
import { AiOutlineBarChart } from "react-icons/ai";

function ServicesItem({ title, isDesc, value }) {
  return (
    <>
      {isDesc ? (
        <div className="space-y-2">
          <h3 className="text-green-500 font-semibold text-lg">{title}</h3>
          <h1 className="text-2xl font-bold">What We Offer</h1>
          <p className="text-sm text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            corporis, ullam amet rerum veniam perspiciatis!
          </p>
          <button className="px-6 py-2.5 text-white text-xs uppercase font-medium rounded-sm bg-green-500">
            View All
          </button>
        </div>
      ) : (
        <div
          id="serviceItem"
          className="space-y-2 text-center border-b-[3px] p-8 text-gray-500 border-b-green-500 rounded-sm hover:bg-green-500 hover:text-white shadow-md"
        >
          <span key={value} className="w-full flex justify-center text-3xl">
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
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
            deleniti debitis adipisci assumenda doloremque totam?
          </p>
        </div>
      )}
    </>
  );
}

export default ServicesItem;

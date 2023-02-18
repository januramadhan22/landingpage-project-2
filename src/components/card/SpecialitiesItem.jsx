import React from "react";
import {
  HiOutlineLightBulb,
  HiUserGroup,
  HiArrowNarrowRight,
} from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";

function SpecialitiesItem({ title, icon, isLarge }) {
  return (
    <div
      className={`w-[280px] md:max-w-xs h-fit md:h-[320px] lg:h-[340px] rounded px-5 md:px-4 pb-5 md:pb-4 pt-5 md:pt-7 lg:p-10 flex flex-col items-center md:justify-between gap-2 md:gap-4 text-center shadow-xl ${
        isLarge
          ? "bg-green-500 h-fit md:h-[340px] lg:h-[380px] pt-6 lg:pt-14 text-white"
          : "bg-white text-black"
      }`}
    >
      <span className={`text-5xl ${isLarge ? "text-white" : "text-green-500"}`}>
        {icon === "bulb" ? (
          <HiOutlineLightBulb />
        ) : icon === "team" ? (
          <HiUserGroup />
        ) : (
          <RiCustomerService2Line />
        )}
      </span>

      <div className="md:space-y-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className={isLarge ? "text-gray-100" : "text-gray-500"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          commodi odit aperiam consectetur corporis nisi
        </p>
      </div>

      <button
        className={`w-fit flex items-center gap-2 uppercase text-sm font-semibold ${
          isLarge ? "text-white" : "text-green-500"
        }`}
      >
        Read More <HiArrowNarrowRight />
      </button>
    </div>
  );
}

export default SpecialitiesItem;

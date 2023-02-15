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
      className={`max-w-xs h-[340px] rounded p-10 flex flex-col items-center justify-between  gap-4 text-center shadow-xl ${
        isLarge
          ? "bg-green-500 h-[380px] pt-14 text-white"
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

      <div className="space-y-4">
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

import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { HiPhone, HiMail } from "react-icons/hi";
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuBar = ["Home", "About Us", "Services", "Cases", "Pages", "Contact"];

  return (
    <>
      <div className="w-full sticky top-0 z-50">
        <div className="relative w-full z-40 py-5 px-8 md:px-16 flex justify-between items-center bg-white shadow-md">
          <h1 className="text-xl font-bold">Brand Logo</h1>
          <div className="m-0 hidden md:flex gap-3 text-xs font-bold text-gray-500 ">
            {menuBar.map((item) => (
              <button className="m-0 hover:text-green-500 transition ease-linear duration-200 uppercase">
                {item}
              </button>
            ))}
          </div>
          <button className="hidden md:block px-5 py-2.5 bg-green-500 rounded text-white font-medium text-xs border border-green-500 hover:bg-white hover:text-green-500 transition ease-linear duration-200 uppercase">
            Get Started
          </button>

          {/* Button Open */}
          <button
            className="text-xl hover:scale-105 transition ease-in"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose /> : <TbMenu2 />}
          </button>
        </div>

        {/* Navbar Open */}
        <div
          className={`absolute z-10 top-[68px] left-0 w-full py-7 bg-stone-900 -translate-y-28 opacity-0 transition ease-in duration-200 flex flex-col gap-6 items-center rounded-b-[40%] bg-opacity-90 ${
            isOpen && "translate-y-0 opacity-100"
          }`}
        >
          <div className="w-full h-full flex justify-center gap-3 text-xs font-semibold text-white">
            {menuBar.map((item) => (
              <button className="m-0 hover:text-green-500 transition ease-linear duration-200 uppercase">
                {item}
              </button>
            ))}
          </div>

          <div
            className="w-fit flex items-center gap-7 text-xs
       text-white font-medium "
          >
            <ImFacebook className="cursor-pointer opacity-50 hover:opacity-100 transition ease-out" />
            <FaTwitter className="cursor-pointer opacity-50 hover:opacity-100 transition ease-out" />
            <FaInstagram className="cursor-pointer opacity-50 hover:opacity-100 transition ease-out" />
            <FaLinkedinIn className="cursor-pointer opacity-50 hover:opacity-100 transition ease-out" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

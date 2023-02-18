import React from "react";
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <div className="hidden w-full py-14 px-20 bg-stone-800 md:flex flex-col gap-10 items-center">
      {/* Top Content */}
      <div className="w-full flex justify-between gap-6">
        {/* Left Content */}
        <div className="space-y-4 w-1/3">
          <h1 className="text-2xl font-bold text-white">BrandName</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui
            aperiam amet, quia velit repudiandae?
          </p>

          <div className="flex items-center gap-5 sosmed">
            <a className="p-2.5 bg-white text-green-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <ImFacebook className="text-lg  sosmedIcon " />
            </a>
            <a className="p-2.5 bg-white text-green-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <FaTwitter className=" sosmedIcon text-lg" />
            </a>
            <a className="p-2.5 bg-white text-green-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <FaInstagram className=" sosmedIcon text-lg" />
            </a>
            <a className="p-2.5 bg-white text-green-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
              <FaLinkedinIn className=" sosmedIcon text-lg" />
            </a>
          </div>
        </div>

        {/* Middle Content */}
        {/* Other Pages */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Other Pages</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" />
              Home
            </li>
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" /> About Us
            </li>
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" /> Services
            </li>
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" /> Contact
            </li>
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" /> Project
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" />
              Privacy Police
            </li>
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" />
              Term Of Service
            </li>
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" />
              Disclaimer
            </li>
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" />
              Credits
            </li>
            <li className="flex items-center text-gray-400 text-sm hover:text-white cursor-pointer transition ease-in">
              <MdKeyboardArrowRight className="text-xl text-white" />
              FAQ
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-1/3 space-y-3">
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus magni tempora quae.
          </p>
          <form className="w-full flex flex-col gap-2">
            <input
              type="text"
              className="px-3 py-2 rounded-sm text-gray-600 focus:outline-none"
            />
            <button className="px-3 py-2 rounded-sm bg-green-500 text-white font-semibold hover:bg-green-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Middle Line */}
      <span className="w-full h-[2px] bg-gray-500 shadow-md shadow-white" />

      {/* Bottom Content */}
      <div className="w-full flex items-center justify-between text-gray-500">
        <p>Financial Template Inspired by Branz</p>
        <p>Januramadhan &copy; 2023. All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;

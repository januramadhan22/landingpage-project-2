import React from "react";
import { HiPhone, HiMail } from "react-icons/hi";
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full py-2 px-8 md:px-16 flex justify-between bg-gradient-to-r from-green-400 to-cyan-500">
      {/* Left Content */}
      <div className="w-fit flex gap-3 items-center text-white text-sm font-medium">
        <span className="flex items-center gap-1.5">
          <HiPhone />
          (+62) 888-8888-8888
        </span>
        <span
          className="block h-full
         w-[1.3px] rounded-full bg-white bg-opacity-50"
        />
        <span className="flex items-center gap-1.5">
          <HiMail /> januramadhan@gmail.com
        </span>
      </div>

      {/* Right Content */}
      <div
        className="w-fit flex items-center gap-2 text-sm
       text-white font-medium"
      >
        <p>Follow Us:</p>
        <div className="flex items-center gap-3 sosmed">
          <ImFacebook className="cursor-pointer sosmedIcon" />
          <FaTwitter className="cursor-pointer sosmedIcon" />
          <FaInstagram className="cursor-pointer sosmedIcon" />
          <FaLinkedinIn className="cursor-pointer sosmedIcon" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

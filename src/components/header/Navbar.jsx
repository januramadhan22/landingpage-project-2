import React from "react";

function Navbar() {
  const menuBar = ["Home", "About Us", "Services", "Cases", "Pages", "Contact"];

  return (
    <div className="w-full sticky top-0 z-50 py-5 px-8 md:px-16 flex justify-between items-center bg-white shadow-md">
      <h1 className="text-xl font-bold">Brand Logo</h1>
      <div className="m-0 flex gap-3 text-xs font-bold text-gray-500 ">
        {menuBar.map((item) => (
          <button className="m-0 hover:text-green-500 transition ease-linear duration-200 uppercase">
            {item}
          </button>
        ))}
      </div>
      <button className="px-5 py-2.5 bg-green-500 rounded text-white font-medium text-xs border border-green-500 hover:bg-white hover:text-green-500 transition ease-linear duration-200 uppercase">
        Get Started
      </button>
    </div>
  );
}

export default Navbar;

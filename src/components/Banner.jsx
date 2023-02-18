import React from "react";

function Banner() {
  return (
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1664302377502-64d779c1f601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJ1c2luZXNzJTIwYWR2aXNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60')] bg-no-repeat bg-center bg-cover h-[560px] md:h-[780px] lg:h-screen w-full relative transition ease-in">
      <div className="absolute z-10 top-64 md:top-1/2 lg:top-1/3 left-6 md:left-16 lg:left-24 w-[340px] md:w-[448px] md:max-w-md p-4 md:p-8 bg-black bg-opacity-40 text-white space-y-3 md:space-y-4 rounded">
        <h1 className="text-3xl md:text-4xl font-bold">
          Financial And Marketing Advisory
        </h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          voluptates vel magni rem libero vero laborum obcaecati labore numquam
          quisquam!
        </p>
        <button className="px-6 py-3 bg-green-600 uppercase font-semibold text-xs md:text-sm rounded hover:bg-green-800 transition ease-linear">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Banner;

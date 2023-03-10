import React from "react";
import { HiCheck } from "react-icons/hi";

function ClientsAndSponsor() {
  const sponsor = [1, 2, 3, 4];

  return (
    <div className="w-full h-fit py-16 px-8 md:px-14 lg:px-28 flex flex-col items-center gap-12 bg-gray-100">
      {/* Top Content */}
      <div className="w-full h-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-40 items-center ">
        {/* Left Content */}
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-3 md:items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left">
            25 Years Trusted With Big Companies
          </h1>
          <p className="font-medium text-gray-500 text-center lg:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam in
            aperiam enim excepturi illum iure optio eveniet voluptates, nemo
            earum.
          </p>
          <ul>
            <li className="flex items-center gap-2 font-medium text-gray-500">
              <HiCheck className="text-green-500 text-xl font-bold" />
              Planning your Future Better
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-500">
              <HiCheck className="text-green-500 text-xl font-bold" />
              Financial planning for safe investment
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-500">
              <HiCheck className="text-green-500 text-xl font-bold" />
              Experience a brand new financial attitude
            </li>
            <li className="flex items-center gap-2 font-medium text-gray-500">
              <HiCheck className="text-green-500 text-xl font-bold" />
              Your financial matters according to our plans
            </li>
          </ul>
          <button className="w-fit mx-auto md:mx-0 mt-4 px-6 py-2.5 text-white text-xs uppercase font-medium rounded-sm bg-green-500 hover:bg-green-700">
            Read More
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-3/4 lg:w-1/2 h-[240px] md:h-[340px] bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c3NpbmVzcyUyMHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')] bg-no-repeat bg-center bg-cover shadow-md rounded-sm relative">
          <div className="max-w-[280px] md:max-w-md p-4 md:p-8 border-l-4 border-green-500 italic text-gray-500 text-sm bg-white rounded-sm shadow-lg absolute left-5 md:left-10 lg:-left-16 -bottom-16">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            numquam, accusantium itaque optio non quis earum nostrum facere nisi
            illo?"
          </div>
        </div>
      </div>

      {/* Middle Content */}
      <div className="mt-20 w-full h-[2px] bg-gray-300 shadow" />

      {/* Bottom Content */}
      <div className="w-full flex flex-wrap items-center justify-evenly gap-10 text-gray-500 text-4xl font-bold">
        {sponsor.map((item) => (
          <h1 key={item}>BrandName</h1>
        ))}
      </div>
    </div>
  );
}

export default ClientsAndSponsor;

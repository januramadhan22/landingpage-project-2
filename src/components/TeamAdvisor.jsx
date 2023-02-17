import React from "react";

function TeamAdvisor() {
  return (
    <div className="w-full py-14 md:px-14 lg:px-24 flex md:flex-col-reverse lg:flex-row justify-center items-center gap-10">
      {/* Desc Content */}
      <div className="md:w-10/12 lg:w-1/3 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-green-500">Meet With</h3>
        <h1 className="text-4xl font-bold">Expert Advisor</h1>
        <p className="text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque
          nulla, sit aperiam possimus deleniti cum exercitationem perspiciatis
          earum dolore?
        </p>
        <button className="w-fit mt-4 px-6 py-2.5 text-white text-xs uppercase font-medium rounded-sm bg-green-500 hover:bg-green-700">
          View All
        </button>
      </div>

      {/* Image Content */}
      <div className="md:w-10/12 lg:w-2/3 flex gap-10">
        <div className="md:w-[300px] md:h-[300px] lg:w-full lg:h-[320px] bg-[url('https://images.unsplash.com/photo-1600878459108-617a253537e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzc2luZXNzJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-no-repeat bg-top bg-cover shadow-md rounded-sm relative" />
        <div className="md:w-[300px] md:h-[300px] lg:w-full lg:h-[320px] bg-[url('https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c3NpbmVzcyUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] bg-no-repeat bg-top bg-cover shadow-md rounded-sm relative" />
      </div>
    </div>
  );
}

export default TeamAdvisor;

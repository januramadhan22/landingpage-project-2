import React from "react";

function ContactUs() {
  return (
    <div className="w-full md:h-80 lg:h-96 bg-[url('https://plus.unsplash.com/premium_photo-1661573644696-d670a189244b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGN1c3RvbWVyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] bg-no-repeat bg-top bg-cover relative flex items-center justify-center">
      <div className="z-20 relative max-w-lg text-center space-y-5">
        <h1 className="text-4xl font-bold text-white">
          Bring A New Experience To Your Investment
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          tempora obcaecati officia ducimus doloribus nulla eveniet quo quis
          facilis optio!
        </p>
        <button className="w-fit mt-4 px-6 py-2.5 text-white text-xs uppercase font-medium rounded-sm bg-green-500 hover:bg-green-700">
          Contact Us
        </button>
      </div>

      <div className=" absolute top-0 w-full h-full bg-black bg-opacity-60" />
    </div>
  );
}

export default ContactUs;

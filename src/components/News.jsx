import React from "react";
import NewsItem from "./card/NewsItem";

function News() {
  return (
    <div className="w-full py-14 px-8 md:px-14 lg:px-24 flex flex-col items-center gap-10">
      <div className="text-center md:w-10/12 lg:w-6/12 space-y-2 md:space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold">Latest News</h1>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quasi
          eius nostrum quo obcaecati inventore!
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-5 md:gap-10">
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
}

export default News;

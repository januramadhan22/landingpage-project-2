import React from "react";
import SpecialitiesItem from "./card/SpecialitiesItem";

function Specialities() {
  return (
    <div className="w-full h-fit md:h-[520px] lg:h-[640px] relative pb-12 md:pb-0">
      <div className="-mt-5 md:-mt-14 lg:-mt-20 flex flex-col md:flex-row justify-center items-center md:items-end gap-5 lg:gap-10 px-8 md:px-6">
        <SpecialitiesItem title={"Innovative Solutions"} icon={"bulb"} />
        <SpecialitiesItem title={"Professional Team"} icon={"team"} isLarge />
        <SpecialitiesItem title={"24/7 Support"} icon={"service"} />
      </div>
    </div>
  );
}

export default Specialities;

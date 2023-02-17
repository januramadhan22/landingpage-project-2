import React from "react";
import SpecialitiesItem from "./card/SpecialitiesItem";

function Specialities() {
  return (
    <div className="w-full md:h-[520px] lg:h-[640px] relative ">
      <div className="md:-mt-14 lg:-mt-20 flex justify-center items-end md:gap-5 lg:gap-10 px-6">
        <SpecialitiesItem title={"Innovative Solutions"} icon={"bulb"} />
        <SpecialitiesItem title={"Professional Team"} icon={"team"} isLarge />
        <SpecialitiesItem title={"24/7 Support"} icon={"service"} />
      </div>
    </div>
  );
}

export default Specialities;

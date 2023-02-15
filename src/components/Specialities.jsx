import React from "react";
import SpecialitiesItem from "./card/SpecialitiesItem";

function Specialities() {
  return (
    <div className="w-full h-[640px] relative ">
      <div className="-mt-20 flex justify-center items-end gap-10">
        <SpecialitiesItem title={"Innovative Solutions"} icon={"bulb"} />
        <SpecialitiesItem title={"Professional Team"} icon={"team"} isLarge />
        <SpecialitiesItem title={"24/7 Support"} icon={"service"} />
      </div>
    </div>
  );
}

export default Specialities;

import React from "react";
import ServicesItem from "./card/ServicesItem";

function Services() {
  return (
    <div className="w-full py-16 px-8 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-3 justify-center gap-3 lg:gap-10">
      <ServicesItem title={"Our Service"} isDesc />
      <ServicesItem title={"Management Investment"} value={1} />
      <ServicesItem title={"Financial Report"} value={2} />
      <ServicesItem title={"Audit & Assurance"} value={3} />
      <ServicesItem title={"Financial Plan"} value={4} />
      <ServicesItem title={"Profit Planning"} value={5} />
    </div>
  );
}

export default Services;

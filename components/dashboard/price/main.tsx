import React from "react";
import Chart from "@/components/dashboard/price/chart";
import Header from "@/components/dashboard/filters";

function Main() {
  const filters=[{value:1,text:"هفتگی"}]
  return (
    <div className="px-2  bg-gray-50 rounded-lg  border">
      <Header options={filters} title="نمودار درآمد" />
      <div className="my-10">
        <Chart />
      </div>
    </div>
  );
}

export default Main;

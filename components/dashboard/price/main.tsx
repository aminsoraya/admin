import React from "react";
import Chart from "@/components/chart";
import Header from "@/components/dashboard/price/header";

function Main() {
  return (
    <div className="px-2  bg-gray-50 rounded-lg  border">
      <Header />
      <div className="my-10">
        <Chart />
      </div>
    </div>
  );
}

export default Main;

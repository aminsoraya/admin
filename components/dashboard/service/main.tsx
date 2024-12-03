import React from "react";
import Chart from "@/components/dashboard/service/chart";
import Header from "@/components/dashboard/service/header";

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

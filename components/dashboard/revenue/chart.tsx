"use client";
import BarChartComponent from "@/components/barChart";
import { RevenueDataType } from "@/types";
import React from "react";

interface IProps{
  data:RevenueDataType[]
}
function Chart({data}:IProps) {
  return (
    <BarChartComponent data={data}/>
  );
}

export default Chart;

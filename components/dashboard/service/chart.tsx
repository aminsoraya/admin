"use client";
import PieChartComponent from "@/components/pieChart/pieChart";
import { ServiceDataType } from "@/types";
import { EnNumToPer } from "@/utils/formating";
import React from "react";

// Chart configuration type
interface ChartConfig {
  colors?: string[];
  formatValue?: (value: number) => string;
  formatPercent?: (percent: number) => string;
  size?: {
    width?: number;
    height?: number;
    outerRadius?: number;
  };
}

// Props interface
interface PieChartProps<T extends ServiceDataType> {
  data: T[];
  config?: ChartConfig;
}

const DEFAULT_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8042"];

function GenericPieChart<T extends ServiceDataType>({
  data,
  config,
}: PieChartProps<T>) {
  const colors = config?.colors ?? DEFAULT_COLORS;
  const formatValue =
    config?.formatValue ?? ((value: number) => value.toLocaleString());

  return (
    <div className="flex items-center justify-center md:flex-row flex-col">
      <div className="xl:w-4/12 w-full flex flex-col items-center gap-2">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="h-14 w-full text-center flex items-center justify-between px-2 text-sm text-gray-800"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-4 w-4 rounded-full"
                style={{ background: colors[index % colors.length] }}
              ></span>
              <span>{item.name}</span>
            </div>
            <span>{EnNumToPer(formatValue(+item.value/10))} تومان</span>
          </div>
        ))}
      </div>
      <div className="xl:w-8/12 w-full">
        <PieChartComponent data={data} />
      </div>
    </div>
  );
}

export default GenericPieChart;

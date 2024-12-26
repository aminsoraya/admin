"use client";
import { RevenueDataType } from "@/types";
import { EnNumToPer } from "@/utils/formating";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

type Config = {
  tickMargin?: number;
  fontSize?: number;
  height?: number;
};
type BarChartDataType<T extends RevenueDataType> = {
  data: T[];
  config?: Config;
};
export default function BarChartComponent<T extends RevenueDataType>({
  data,
  config,
}: BarChartDataType<T>) {

 
  const fontSize = config?.fontSize ?? 12;
  const tickMargin = config?.tickMargin ?? 50;
  const height = config?.height ?? 300;

  return (
    <ResponsiveContainer className="w-full " height={height}>
      <BarChart className="w-full h-full" data={data}>
        <XAxis dataKey="title" fontSize={fontSize} />
        <YAxis
          tickMargin={tickMargin}
          fontSize={fontSize}
          dataKey="value"
          tickFormatter={(value) => {
            return EnNumToPer(value.toLocaleString());
          }}
        />

        <Bar
          dataKey="value"
          fill="#ffc107"
          radius={5}
          cursor={"pointer"}
          label={({ x, y, value }: any) => (
            <text
              x={x + 35}
              y={y + 2} // Adjust this value to position the label
              fill="gray"
              fontSize={11}
              textAnchor="middle"
              className="flex items-center bg-gray-300"
            >
              {value.toString() == "0"
                ? ""
                : EnNumToPer(value.toLocaleString())}
            </text>
          )}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

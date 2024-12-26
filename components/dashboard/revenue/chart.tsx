"use client";
import { RevenueDataType } from "@/types";
import { EnNumToPer } from "@/utils/formating";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface IProps{
  data:RevenueDataType[]
}
function Chart({data}:IProps) {
  return (
    <ResponsiveContainer className="w-full " height={300}>
      <BarChart className="w-full h-full" data={data}>
        <XAxis dataKey="title" fontSize={12} />
        <YAxis
          tickMargin={50}
          fontSize={12}
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

export default Chart;

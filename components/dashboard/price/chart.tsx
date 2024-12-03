"use client";
import { EnNumToPer } from "@/utils/formating";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    title: "شنبه",
    value: 8000000,
  },
  {
    title: "یک شنبه",
    value: 6500000,
  },
  {
    title: "دوشنبه",
    value: 7200000,
  },
  {
    title: "سه شنبه",
    value: 4900000,
  },
  {
    title: "چهارشنبه",
    value: 9000000,
  },
  {
    title: "پنج شنبه",
    value: 12000000,
  },
  {
    title: "جمعه",
    value: 4000000,
  },
];

function Chart() {
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
              x={x +35}
              y={y+2} // Adjust this value to position the label
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

"use client";
import { EnNumToPer } from "@/utils/formating";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  {
    title: "شنبه",
    value: 8000000,
    name: "خط مو",
  },
  {
    title: "یک شنبه",
    value: 6500000,
    name: "اصلاح ریش",
  },
  {
    title: "دوشنبه",
    value: 7200000,
    name: "رنگ مو",
  },
  {
    title: "سه شنبه",
    value: 4900000,
    name: "کاشت ناخن",
  },
  {
    title: "چهارشنبه",
    value: 9000000,
    name: "اصلاح ابرو",
  },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8042"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      className="w-full text-center"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${EnNumToPer((percent * 100).toFixed(0))}%`}
    </text>
  );
};
function Chart() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-4/12 flex flex-col items-center gap-2">
        {COLORS.map((item, index) => {
          return (
            <div
              className={`h-14 w-full text-center  flex items-center justify-between px-2 text-sm text-gray-800`}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ background: item }}
                ></span>
                <span>{data[index].name}</span>
              </div>
              <span>
                {EnNumToPer(data[index].value.toLocaleString())} تومان
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-8/12">
        <ResponsiveContainer className="w-full flex" height={300}>
          <PieChart width={500} height={800}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={140}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;

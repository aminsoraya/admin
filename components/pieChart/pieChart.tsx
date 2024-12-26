import { ServiceDataType } from "@/types";
import { EnNumToPer } from "@/utils/formating";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const DEFAULT_COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8042"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (formatPercent: (percent: number) => string) => {
  return ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
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
        {EnNumToPer(formatPercent(percent * 100))}
      </text>
    );
  };
};

 
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
interface PieChartProps<T> {
  data: T[];
  config?: ChartConfig;
}
export default function PieChartComponent<T extends ServiceDataType>({
  data,
  config,
}: PieChartProps<T>) {
  const colors = config?.colors ?? DEFAULT_COLORS;
  const formatValue =
    config?.formatValue ?? ((value: number) => value.toLocaleString());
  const formatPercent =
    config?.formatPercent ?? ((percent: number) => `${percent.toFixed(0)}%`);
  const chartSize = {
    width: config?.size?.width ?? 500,
    height: config?.size?.height ?? 300,
    outerRadius: config?.size?.outerRadius ?? 140,
  };

  return (
    <ResponsiveContainer className="w-full flex" height={chartSize.height}>
      <PieChart width={chartSize.width} height={chartSize.height}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel(formatPercent)}
          outerRadius={chartSize.outerRadius}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

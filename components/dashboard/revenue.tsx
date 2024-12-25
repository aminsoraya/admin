import React from "react";
import RevenueCard from "./revenueCard";
import { RevenueDataType } from "@/types";

export default function Revenue({
  dailyTotal,
  monthlyTotal,
  weeklyTotal,
  yearlyTotal,
}: RevenueDataType) {
  return (
    <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
      <RevenueCard text="فروش امسال" money={yearlyTotal / 10} />
      <RevenueCard text="فروش این ماه" money={monthlyTotal / 10} />
      <RevenueCard text="فروش این هفته" money={weeklyTotal / 10} />
      <RevenueCard text="فروش امروز" money={dailyTotal / 10} />
    </div>
  );
}

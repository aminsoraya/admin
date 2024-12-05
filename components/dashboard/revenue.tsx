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
    <div className="grid grid-cols-4 gap-5">
      <RevenueCard text="فروش سالانه" money={yearlyTotal / 10} />
      <RevenueCard text="فروش ماهانه" money={monthlyTotal / 10} />
      <RevenueCard text="فروش هفتگی" money={weeklyTotal / 10} />
      <RevenueCard text="فروش امروز" money={dailyTotal / 10} />
    </div>
  );
}

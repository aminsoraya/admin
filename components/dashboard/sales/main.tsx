import React, { FC } from "react";
import RevenueCard from "./card";
import { useDashboardStore } from "@/state/zustand/useDashboardStore";
import LoadingSales from "./loading";

export default function Sales() {
  const { initialData } = useDashboardStore();

  const Cards: FC = () => {
    const { dailyTotal, monthlyTotal, weeklyTotal, yearlyTotal } = initialData?.sales!;
    return (
      <>
        <RevenueCard text="فروش امسال" money={yearlyTotal / 10} />
        <RevenueCard text="فروش این ماه" money={monthlyTotal / 10} />
        <RevenueCard text="فروش این هفته" money={weeklyTotal / 10} />
        <RevenueCard text="فروش امروز" money={dailyTotal / 10} />
      </>
    );
  };
  return (
    <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
      {initialData?.sales! ? <Cards /> : <LoadingSales />}
    </div>
  );
}

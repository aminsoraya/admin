import React from "react";
import RevenueCard from "./revenueCard";

export default function Revenue() {
  return (
    <div className="grid grid-cols-4 gap-5">
      <RevenueCard text="فروش سالانه" money={3_200_000_000} />
      <RevenueCard text="فروش ماهانه" money={670_000_000}/>
      <RevenueCard text="فروش هفتگی" money={87_000_000}/>
      <RevenueCard text="فروش امروز" money={12_000_000}/>
    </div>
  );
}

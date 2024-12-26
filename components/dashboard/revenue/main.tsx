"use client";
import React, { FC } from "react";
import Chart from "@/components/dashboard/revenue/chart";
import Header from "@/components/dashboard/filters";
import { useDashboardStore } from "@/state/zustand/useDashboardStore";
import Loading from "./loading";

export default function Main() {
  const filters = [{ value: 1, text: "هفتگی" }];
  const { initialData } = useDashboardStore();

  const Card: FC = () => {
    return (
      <div className="px-2  bg-gray-50 rounded-lg  border">
        <Header options={filters} title="نمودار درآمد" />
        <div className="my-10">
          <Chart data={initialData?.revenue!} />
        </div>
      </div>
    );
  };

  return !initialData?.revenue ? <Loading /> : <Card />;
}

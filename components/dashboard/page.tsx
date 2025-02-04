"use client";
import RevenueProgressChart from "@/components/dashboard/revenue/main";
import ServiceProgresChart from "@/components/dashboard/service/main";
import Sales from "@/components/dashboard/sales/main";
import Customer from "@/components/dashboard/customer/page";
import Users from "@/components/dashboard/stylist/page";
import { useDashboardApi } from "@/service/hooks/fetcher";
import { useEffect } from "react";
import { useDashboardStore } from "@/state/zustand/useDashboardStore";

export default function Home() {
  //get data from api
  const initialData = useDashboardApi()!;

  //extract function from state manager
  const { setInitialData } = useDashboardStore();

  //filling state manager
  useEffect(() => {
    if (initialData) {
      setInitialData(initialData);
    }
  }, [initialData]);

  return (
    <div className="flex flex-col">
      <Sales />
      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-5 my-5">
        <RevenueProgressChart />
        <ServiceProgresChart />
        <Customer />
        <Users />
      </div>
    </div>
  );
}

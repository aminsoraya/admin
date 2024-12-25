"use client";
import PriceProgressChart from "@/components/dashboard/price/main";
import ServiceProgresChart from "@/components/dashboard/service/main";
import Revenue from "@/components/dashboard/revenue";
import Customer from "@/components/dashboard/customer/page";
import Users from "@/components/dashboard/stylist/page";
import LoadingSales from "@/components/loading/LoadingSales";
import { useDashboardData } from "@/service/hooks/fetcher";

export default function Home() {
  const { revenue } = useDashboardData();

  return (
    <div className="flex flex-col">
      {!revenue ? <LoadingSales /> : <Revenue {...revenue!} />}
      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-5 my-5">
        <PriceProgressChart />
        <ServiceProgresChart />
        <Customer />
        <Users />
      </div>
    </div>
  );
}

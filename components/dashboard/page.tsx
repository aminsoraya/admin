"use client";
import PriceProgressChart from "@/components/dashboard/price/main";
import ServiceProgresChart from "@/components/dashboard/service/main";
import Revenue from "@/components/dashboard/revenue";
import Customer from "@/components/dashboard/customer/page";
import Users from "@/components/dashboard/stylist/page";
import LoadingSales from "@/components/loading/LoadingSales";
import { useSale } from "@/service/hooks/fetcher";

export default function Home() {
  const { data: saleData } = useSale();

  return (
    <div className="flex flex-col">
      {!saleData ? <LoadingSales /> : <Revenue {...saleData!} />}
      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-5 my-5">
        <PriceProgressChart />
        <ServiceProgresChart />
        <Customer />
        <Users />
      </div>
    </div>
  );
}

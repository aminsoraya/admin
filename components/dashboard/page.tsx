"use client";
import PriceProgresChart from "@/components/dashboard/price/main";
import ServiceProgresChart from "@/components/dashboard/service/main";
import Revenue from "@/components/dashboard/revenue";
import Customer from "@/components/dashboard/customer/page";
import LoadingRevenue from "@/components/loading/LoadingRevenue";
import { useRevenueFetcher } from "@/service/hooks/fetcher";

export default function Home() {
  const { data } = useRevenueFetcher();
  console.log("Data ",data);

  return (
    <div className="flex flex-col">
      {!data ? <LoadingRevenue /> : <Revenue {...data!} />}
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 my-5">
        <PriceProgresChart />
        <ServiceProgresChart />
        <Customer />
      </div>
    </div>
  );
}

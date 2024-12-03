import PriceProgresChart from "@/components/dashboard/price/main";
import ServiceProgresChart from "@/components/dashboard/service/main";
import Revenue from "@/components/dashboard/revenue";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Revenue />
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 my-5">
        <PriceProgresChart />
        <ServiceProgresChart />
      </div>
    </div>
  );
}

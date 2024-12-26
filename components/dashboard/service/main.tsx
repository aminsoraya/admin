import React, { FC } from "react";
import Chart from "@/components/dashboard/service/chart";
import Header from "@/components/dashboard/filters";
import { useDashboardStore } from "@/state/zustand/useDashboardStore";
import Loading from "./loading";

function Main() {
  const { initialData } = useDashboardStore();
  const filters = [{ value: 1, text: "هفتگی" }];

  const Card: FC = () => {
    return (
      <div className="px-2  bg-gray-50 rounded-lg  border">
        <Header options={filters} title="پرفروش ترین خدمات" />
        <div className="my-10">
          <Chart data={initialData?.service!}  />
        </div>
      </div>
    );
  };
  return initialData?.service ? <Card /> : <Loading />;
}

export default Main;

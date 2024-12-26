import React, { FC } from "react";
import Header from "../filters";
import Table from "./table";
import { useDashboardStore } from "@/state/zustand/useDashboardStore";
import Loading from "./loading";

export default function Customer() {
  const filters = [{ value: 1, text: "هفتگی" }];

  const { initialData } = useDashboardStore();

  const Card: FC = () => {
    return (
      <div className="w-full bg-gray-50 border px-3  rounded-lg flex flex-col">
        <Header options={filters} title="پرتقاضا ترین کارکنان" />
        <Table data={initialData?.user!} />
      </div>
    );
  };

  return initialData?.user ? <Card /> : <Loading />;
}

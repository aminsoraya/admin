import React, { FC } from "react";
import Header from "../filters";
import Table from "./table";
import Loading from "./loading";
import { useDashboardStore } from "@/state/zustand/useDashboardStore";

export default function CustomerComponent() {
  const { customers } = useDashboardStore();
  const filters = [{ value: 1, text: "هفتگی" }];

  const Card: FC = () => {
    return (
      <div className="w-full bg-gray-50 border px-3  rounded-lg flex flex-col">
        <Header options={filters} title="پرتقاضا ترین مشتریان" />
        <Table />
      </div>
    );
  };

  return customers ? <Card /> : <Loading />;
}

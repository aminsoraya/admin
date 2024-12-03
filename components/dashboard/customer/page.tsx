import React from "react";
import Header from "../filters";
import Table from "./table";

export default function Customer() {
  const filters = [{ value: 1, text: "هفتگی" }];
  return (
    <div className="w-full bg-gray-50 border px-3 py-3 rounded-lg flex flex-col">
      <Header options={filters} title="ارزیابی مشتری" />
      <Table />
    </div>
  );
}

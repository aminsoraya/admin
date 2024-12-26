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
  const { salesData, revenueData, serviceData, customerData } =
    useDashboardApi();

  //extract function from state manager
  const {
    setSales: setSalesData,
    setRevenues: setRevenueData,
    setService: setServiceData,
    setCustomers: setCustomersData,
  } = useDashboardStore();


  //filling state manager
  useEffect(() => {
    //sales
    if (salesData) {
      setSalesData(salesData);
    }

    //revenue
    if (revenueData) {
      setRevenueData(revenueData);
    }

    //service
    if (serviceData) {
      setServiceData(serviceData);
    }

    //customer
    if (customerData) {
      setCustomersData(customerData);
    }
  }, [salesData, revenueData, serviceData, customerData]);

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

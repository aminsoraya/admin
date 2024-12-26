import {
  getNowDate,
  getStartAndEndMonth,
  getStartAndEndWeek,
  getStartAndEndYear,
} from "@/utils";
import { useEffect, useState } from "react";
import { RevenueDataType, SaleDataType, ServiceDataType } from "@/types";

export const useDashboardApi = () => {
  const [salesData, setSalesData] = useState<SaleDataType | undefined>();
  const [revenueData, setRevenueData] = useState<
    RevenueDataType[] | undefined
  >();
  const [serviceData, setServiceData] = useState<
    ServiceDataType[] | undefined
  >();

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3000/initialData")
        .then((data) => data.json())
        .then((data) => data);

      //sales
      if (response?.sales) {
        setSalesData({
          dailyTotal: parseInt(response.sales.dailyTotal),
          weeklyTotal: parseInt(response.sales.weeklyTotal),
          monthlyTotal: parseInt(response.sales.monthlyTotal),
          yearlyTotal: parseInt(response.sales.yearlyTotal),
        });
      }

      //revenue
      if (response?.revenue) {
        setRevenueData(response?.revenue);
      }

      //service
      if (response?.service) {
        setServiceData(response?.service);
      }
    })();
  }, []);

  return {
    salesData,
    revenueData,
    serviceData,
  };
};

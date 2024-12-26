import {
  getNowDate,
  getStartAndEndMonth,
  getStartAndEndWeek,
  getStartAndEndYear,
} from "@/utils";
import { useEffect, useState } from "react";
import { RevenueDataType, SaleDataType } from "@/types";

export const useDashboardApi = () => {
  const [sales, setSales] = useState<SaleDataType | undefined>();
  const [revenue, setRevenue] = useState<RevenueDataType[] | undefined>();

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3000/initialData")
        .then((data) => data.json())
        .then((data) => data);

      if (response?.sales) {
        setSales({
          dailyTotal: parseInt(response.sales.dailyTotal),
          weeklyTotal: parseInt(response.sales.weeklyTotal),
          monthlyTotal: parseInt(response.sales.monthlyTotal),
          yearlyTotal: parseInt(response.sales.yearlyTotal),
        });
      }
      if (response?.revenue) {
        setRevenue(response?.revenue);
      }
    })();
  }, []);

  return {
    sales,
    revenue,
  };
};

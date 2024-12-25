import {
  getNowDate,
  getStartAndEndMonth,
  getStartAndEndWeek,
  getStartAndEndYear,
} from "@/utils";
import { useEffect, useState } from "react";
import { RevenueDataType } from "@/types";


export const useDashboardData = () => {
  const [revenue, setRevenue] = useState<
    RevenueDataType | undefined
  >();

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3000/initialData")
        .then((data) => data.json())
        .then((data) => data);
      if (response?.revenue) {
        setRevenue({
          dailyTotal: parseInt(response.revenue.dailyTotal),
          weeklyTotal: parseInt(response.revenue.weeklyTotal),
          monthlyTotal: parseInt(response.revenue.monthlyTotal),
          yearlyTotal: parseInt(response.revenue.yearlyTotal),
        });
      }
    })();
  }, []);

  return {
    revenue
  };
};

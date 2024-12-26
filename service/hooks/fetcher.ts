import {
  getNowDate,
  getStartAndEndMonth,
  getStartAndEndWeek,
  getStartAndEndYear,
} from "@/utils";
import { useEffect, useState } from "react";
import { SaleDataType } from "@/types";

export const useDashboardApi= () => {
  const [sales, setSales] = useState<SaleDataType | undefined>();

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3000/initialData")
        .then((data) => data.json())
        .then((data) => data);
      if (response?.revenue) {
        setSales({
          dailyTotal: parseInt(response.revenue.dailyTotal),
          weeklyTotal: parseInt(response.revenue.weeklyTotal),
          monthlyTotal: parseInt(response.revenue.monthlyTotal),
          yearlyTotal: parseInt(response.revenue.yearlyTotal),
        });
      }
    })();
  }, []);

  return {
    sales,
  };
};

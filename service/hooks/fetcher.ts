import {
  getNowDate,
  getStartAndEndMonth,
  getStartAndEndWeek,
  getStartAndEndYear,
} from "@/utils";
import { useEffect, useState, useTransition } from "react";
import { getDashboradInitialData } from "../api";
import { RevenueDataType } from "@/types";

export const useRevenueFetcher = () => {
  const [, FetchInitialData] = useTransition();
  const { startOfWeek, endOfWeek } = getStartAndEndWeek();
  const { startOfMonth, endOfMonth } = getStartAndEndMonth();
  const { startOfYear, endOfYear } = getStartAndEndYear();
  const { nowDate } = getNowDate();
  const [response, setResponse] = useState<RevenueDataType | undefined>();

  useEffect(() => {
    FetchInitialData(async () => {
      await getDashboradInitialData({
        nowDate,
        startOfWeek,
        endOfWeek,
        startOfMonth,
        endOfMonth,
        startOfYear,
        endOfYear,
      }).then((data: any) => {
        const dataParser = data.at(0);
        setResponse({
          dailyTotal: +dataParser.f0,
          weeklyTotal: +dataParser.f1,
          monthlyTotal: +dataParser.f2,
          yearlyTotal: +dataParser.f3,
        });
      });
    });
  }, []);

  return { data: response };
};

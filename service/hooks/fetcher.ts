import {
  getNowDate,
  getStartAndEndMonth,
  getStartAndEndWeek,
  getStartAndEndYear,
} from "@/utils";
import { useEffect, useState } from "react";
import { InitialData } from "@/types";

export const useDashboardApi = () => {
  const [initialData, setInitialData] = useState<InitialData | undefined>();

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3000/initialData")
        .then((data) => data.json())
        .then((data) => data);

      //sales
      if (response) {
        setInitialData(response);
      }
    })();
  }, []);

  return initialData;
};

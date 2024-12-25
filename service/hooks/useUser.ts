import { User } from "@/types";

export const useUser = () => {
  return [
    {
      level: 1,
      mobile: "0912 345 4443",
      OrderCount: 12,
      Profitability: 13_000_000,
    },
    {
      level: 2,
      mobile: "0917 444 3234",
      OrderCount: 10,
      Profitability: 12_000_000,
    },
    {
      level: 3,
      mobile: "0918 444 6787",
      OrderCount: 8,
      Profitability: 11_000_000,
    },
    {
      level: 4,
      mobile: "0917 335 4443",
      OrderCount: 5,
      Profitability: 8_000_000,
    },
    {
      level: 5,
      mobile: "0922 111 4443",
      OrderCount: 3,
      Profitability: 6_000_000,
    },
  ] as User[];
};

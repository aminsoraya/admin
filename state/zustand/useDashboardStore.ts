import { create } from "zustand";
import { RevenueDataType, SaleDataType } from "@/types";

interface DashboardStore {
  sales: SaleDataType | undefined;
  setSales: (data: SaleDataType) => void;
  revenues: RevenueDataType[] | undefined;
  setRevenues: (data: RevenueDataType[]) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  sales: undefined,
  revenues: undefined,
  setSales: (data) => set({ sales: data }),
  setRevenues: (data) => set({ revenues: data }),
}));

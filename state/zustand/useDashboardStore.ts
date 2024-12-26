import { create } from "zustand";
import { RevenueDataType, SaleDataType, ServiceDataType } from "@/types";

interface DashboardStore {
  sales: SaleDataType | undefined;
  revenues: RevenueDataType[] | undefined;
  service: ServiceDataType[] | undefined;
  setSales: (data: SaleDataType) => void;
  setService: (data: ServiceDataType[]) => void;
  setRevenues: (data: RevenueDataType[]) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  sales: undefined,
  revenues: undefined,
  service: undefined,
  setService: (data) => set({ service: data }),
  setSales: (data) => set({ sales: data }),
  setRevenues: (data) => set({ revenues: data }),
}));

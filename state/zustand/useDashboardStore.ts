import { create } from "zustand";
import { SaleDataType } from "@/types";

interface DashboardStore {
  sales: SaleDataType | undefined;
  setSales: (data: SaleDataType) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  sales: undefined,
  setSales: (data) => set({ sales: data }),
}));

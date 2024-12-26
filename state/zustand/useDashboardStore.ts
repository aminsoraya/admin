import { create } from "zustand";
import { InitialData } from "@/types";

interface DashboardStore {
  initialData: InitialData | undefined;

  setInitialData: (data: InitialData) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  initialData: undefined,

  setInitialData: (data) => set({ initialData: data }),
}));

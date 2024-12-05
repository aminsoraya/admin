export interface DashboardDataRequest {
  nowDate: string;
  startOfWeek: string;
  endOfWeek: string;
  startOfMonth: string;
  endOfMonth: string;
  startOfYear: string;
  endOfYear: string;
}
export interface RevenueDataType{
    dailyTotal:number;
    weeklyTotal:number,
    monthlyTotal:number,
    yearlyTotal:number
}
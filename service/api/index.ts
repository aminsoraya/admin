"use server";
import { DashboardDataRequest } from "@/types";
import { PrismaClient } from "@prisma/client";

export const getDashboradInitialData = async (props: DashboardDataRequest) => {
  const prisma = new PrismaClient();
  const {
    nowDate,
    endOfMonth,
    endOfWeek,
    endOfYear,
    startOfMonth,
    startOfWeek,
    startOfYear,
  } = props;

  return await prisma.$queryRaw`call RevenueAverage(${nowDate},${startOfWeek},${endOfWeek},${startOfMonth},${endOfMonth},${startOfYear},${endOfYear})`;
};

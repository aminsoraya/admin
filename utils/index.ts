import moment from "moment-jalaali";

export const getStartAndEndWeek = () => {
  let now = moment();
  let startOfWeek = now.clone().startOf("w").isoWeekday(6).format("YYYY/M/D");
  let endOfWeek = now
    .clone()
    .endOf("W")
    .isoWeekday(6)
    .subtract(1, "days")
    .format("YYYY/M/D");

  return { startOfWeek, endOfWeek };
};
export const getStartAndEndMonth = () => {
  let now = moment();
  let startOfMonth = now.clone().startOf("jMonth").format("YYYY/M/D");
  let endOfMonth = now.clone().endOf("jMonth").format("YYYY/M/D");

  return { startOfMonth, endOfMonth };
};
export const getStartAndEndYear = () => {
  let now = moment();
  let startOfYear = now.clone().startOf("jYear").format("YYYY/M/D");
  let endOfYear = now.clone().endOf("jYear").format("YYYY/M/D");

  return { startOfYear, endOfYear };
};
export const getNowDate = () => {
  let now = moment();
  let nowFormating = now.clone().format("YYYY/M/D");

  return { nowDate: nowFormating };
};

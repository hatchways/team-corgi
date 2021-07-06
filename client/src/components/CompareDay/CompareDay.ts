export const compareDay = (day1: Date, day2: Date): boolean => {
  if (
    day1.getFullYear() == day2.getFullYear() &&
    day1.getMonth() == day2.getMonth() &&
    day1.getDate() == day2.getDate()
  )
    return true;
  else return false;
};

export const minuteToHourMinute = (totalMinute: number): string => {
  const hour = parseInt((totalMinute / 60).toString());
  const minute = totalMinute % 60;
  return `${hour}시간 ${minute}분`;
};

export const minuteToHourMinute = (
  totalMinute: number,
  type: 'hour' | 'minute' | 'hourminute'
): string => {
  const hour = parseInt((totalMinute / 60).toString());
  const minute = totalMinute % 60;

  if (type === 'hourminute') {
    return `${hour}시간 ${minute}분`;
  } else if (type === 'hour') {
    return `${hour}`;
  } else if (type === 'minute') {
    return `${minute}`;
  } else {
    return '';
  }
};

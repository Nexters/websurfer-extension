import dayjs from 'dayjs';

const YYYYMMDD = 'YYYY년 MM월 DD일';

export const secondsToHourMinute = (
  seconds: number,
  type: 'hour' | 'minute' | 'hourminute'
): string => {
  return minuteToHourMinute(Math.ceil(seconds / 60), type);
};

export const minuteToHourMinute = (
  totalMinute: number,
  type: 'hour' | 'minute' | 'hourminute'
): string => {
  const hour = parseInt((totalMinute / 60).toString());
  const minute = totalMinute % 60;

  if (type === 'hourminute') {
    return `${hour > 0 ? `${hour}시간 ` : ''}${minute}분`;
  } else if (type === 'hour') {
    return `${hour}`;
  } else if (type === 'minute') {
    return `${minute}`;
  } else {
    return '';
  }
};

export const printYyyymmddToday = dayjs().format(YYYYMMDD);
export const printYyyymmddM7 = dayjs().add(-7, 'day').format(YYYYMMDD);
export const printYyyymmddMonday = (week?: number) =>
  dayjs()
    .day(1 + (week ? week : 0) * 7)
    .format(YYYYMMDD); //한 주의 시작일 (월요일)
export const printYyyymmddSunday = (week?: number) =>
  dayjs()
    .day(7 + (week ? week : 0) * 7)
    .format(YYYYMMDD); //한 주의 마감일 (일요일)

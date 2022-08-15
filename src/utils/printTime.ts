import dayjs from 'dayjs';

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

export const printYyyymmddToday = dayjs(new Date()).format('YYYY년 MM월 DD일');
export const printYyyymmddM7 = dayjs(new Date())
  .add(-7, 'day')
  .format('YYYY년 MM월 DD일');

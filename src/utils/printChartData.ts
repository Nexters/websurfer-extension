type PrintChartData = number | { value: number; itemStyle: { color: string } };

const printChartData = (
  arr: number[],
  primaryColor: string
): PrintChartData[] => {
  const maxValue = Math.max(...arr);

  const data = arr.map((value) => {
    if (value === maxValue) {
      return { value, itemStyle: { color: primaryColor } };
    } else {
      return value;
    }
  });

  return data;
};

export default printChartData;

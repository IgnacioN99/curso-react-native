export const barStyles = (num: number) => {
  const color = num > 49 ? '#00ac17' : '#ff3e3e';
  return {
    backgroundColor: color,
    width: `${num}%`,
  };
};

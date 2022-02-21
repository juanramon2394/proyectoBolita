function add0(v: number): string {
  if (v < 10) {
    return `0${v}`;
  }
  return `${v}`;
}
export const to12hFormat = (value:number): string => {
  if(!value && value !== 0) {
    return "";
  }
  if (value < 12) {
    return `${add0(value)}:00 AM`;
  } else {
    return `${add0(value-12)}:00 PM`;
  }
}
export const rounded2 = (value:number): string => {
  if(value === undefined) 
    return "";
  return value.toFixed(2);
}
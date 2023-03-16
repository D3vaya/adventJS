export const daysToXmas = (date: Date) => {
  if (!date) throw "undefined params";
  if (typeof date !== "object") throw "undefined params";
  
  const christmas = new Date(2021, 11, 25);  

  const oneDay = 1000 * 60 * 60 * 24;
  const remainingDays = Math.ceil((christmas.getTime() - date.getTime()) / oneDay);

  return remainingDays;
  
};

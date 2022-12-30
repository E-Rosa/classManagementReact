function formatDateToString(date: Date): string {
  let a = [];
  let dateString = date.toLocaleDateString();
  let dayMonthYear = dateString.split("/");
  a.push(dayMonthYear[2]);
  a.push(dayMonthYear[1]);
  a.push(dayMonthYear[0]);
  return a.join("-");
}

function formatStringToDate(dateString: string): Date {
  const dateStringArray = dateString.split("-");
  return new Date(
    parseInt(dateStringArray[0]),
    parseInt(dateStringArray[1]),
    parseInt(dateStringArray[2])
  );
}

export { formatDateToString, formatStringToDate };

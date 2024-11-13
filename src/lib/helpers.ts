export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInItaly(): Date {
  // Get the current time in Italy, accounting for DST automatically
  const nowInItaly = new Date().toLocaleString("it-IT", {
    timeZone: "Europe/Rome",
  });
  return new Date(nowInItaly);
}

export function formatTimeTo12H(date: Date): string {
  // First ensure we have a valid date
  const validDate = date instanceof Date && !isNaN(date.getTime()) ? date : new Date();

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/Rome",
  };

  return new Intl.DateTimeFormat("en-US", options).format(validDate);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

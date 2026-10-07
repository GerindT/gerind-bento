const TIME_ZONE = "Europe/Tirane";

export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

/** Formats a date as a 12h clock in Albania's time zone (e.g. "2:30 PM"). */
export function formatTimeTo12H(date: Date = new Date()): string {
  const validDate = date instanceof Date && !isNaN(date.getTime()) ? date : new Date();

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: TIME_ZONE,
  }).format(validDate);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

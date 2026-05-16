/**
 * Detects whether the current time is within ELIZ ENERGY business hours.
 * Working hours: 11:00 AM - 5:00 PM IST (Indian Standard Time, UTC+5:30)
 */
export function isBusinessHours(): boolean {
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());

  const hours = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minutes = Number(
    parts.find((part) => part.type === "minute")?.value ?? 0,
  );

  const afterOpen = hours > 11 || (hours === 11 && minutes >= 0);
  const beforeClose = hours < 17;

  return afterOpen && beforeClose;
}

/**
 * Returns a formatted IST time string for display purposes.
 */
export function getISTTimeString(): string {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
}

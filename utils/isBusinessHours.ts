/**
 * Detects whether the current time is within ELIZ ENERGY business hours.
 * Working hours: 11:00 AM – 5:00 PM IST (Indian Standard Time, UTC+5:30)
 */
export function isBusinessHours(): boolean {
  const now = new Date();

  // Convert to IST by computing UTC offset manually (+5:30 = 330 minutes)
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const istMs = utcMs + 5.5 * 60 * 60_000; // IST = UTC + 5:30
  const ist = new Date(istMs);

  const hours = ist.getHours();
  const minutes = ist.getMinutes();

  // Business hours: 11:00 to 17:00 (5 PM) IST
  const afterOpen = hours > 11 || (hours === 11 && minutes >= 0);
  const beforeClose = hours < 17;

  return afterOpen && beforeClose;
}

/**
 * Returns a formatted IST time string for display purposes.
 */
export function getISTTimeString(): string {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const istMs = utcMs + 5.5 * 60 * 60_000;
  const ist = new Date(istMs);

  return ist.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
}

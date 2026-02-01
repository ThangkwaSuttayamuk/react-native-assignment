/**
 * Formats a phone number to mask middle digits
 * @param phone - The phone number to format (e.g., "0891234567")
 * @returns Formatted phone number (e.g., "089-XXX-4567")
 */
export const formatPhoneNumber = (phone: string): string => {
  if (!phone || phone.length < 10) return phone;
  return `${phone.slice(0, 3)}-XXX-${phone.slice(-4)}`;
};

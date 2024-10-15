export const capitalizeEachWord = (sentence: string): string => {
  return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
};

export function getDateOrTime(
  datetimeString: string,
  returnType: "date" | "time"
): string {
  const [datePart, timePart] = datetimeString.split(" ");
  return returnType === "date" ? datePart : timePart;
}

export function getInitial(name: string): string {
  const initials = name
    .split(" ") // Split the name by spaces
    .map((word) => word[0]?.toUpperCase()) // Get the first letter of each word and convert to uppercase
    .join(""); // Join them together as initials

  return initials;
}

export function formatRupiahWithoutRp(amount: string): string {
  const numericValue = amount.replace(/[^0-9]/g, "");
  const numericAmount = parseFloat(numericValue);

  if (isNaN(numericAmount)) {
    return "";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    currencyDisplay: "code",
  })
    .format(numericAmount)
    .replace("IDR", "")
    .trim();
}

export function removeRupiahFormatting(formattedAmount: string): string {
  // Remove any non-numeric characters except for commas (which may represent decimals in some locales)
  const plainValue = formattedAmount.replace(/[^0-9,]/g, "");

  // Replace commas with a dot (in case the formatted string uses commas for decimal separators)
  const numericValue = plainValue.replace(/,/g, ".");

  return numericValue;
}

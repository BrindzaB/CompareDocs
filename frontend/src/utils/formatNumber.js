export function formatNumberToCurrency(number) {
    if (!number && number !== 0) return "N/A";
    return new Intl.NumberFormat("hu-HU").format(number);
}
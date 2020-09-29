export function normalize_price_text(priceObj) {
  if (!priceObj) return "";
  return `${priceObj.currency} ${Number(
    priceObj.amount
  ).toFixed(priceObj.decimals)}`;
}

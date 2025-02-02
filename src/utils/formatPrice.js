export function formatPriceWithCommas(price) {
    if (typeof price !== "number") return "Invalid price";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
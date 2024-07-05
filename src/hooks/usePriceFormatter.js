import { ref } from 'vue';

export function usePriceFormatter() {
  const formatPrice = (value) => {
    if (typeof value !== 'number') {
      return value;
    }

    // Convert the number to a string with fixed decimal places
    let formattedValue = value.toFixed(2);

    // Replace dot with comma for thousands separator
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Replace comma with dot for the decimal point
    formattedValue = formattedValue.replace(',', '.');

    // Add the euro sign before the formatted value
    return '€' + formattedValue;
  };

  return { formatPrice };
}
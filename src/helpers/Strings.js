export const truncate = (string, max = 40) =>
  string.length > max ? `${string.substr(0, max)}...` : string;

export const toCurrency = (valueToFormat, currencyPrefix = 'R$') => {
  if (valueToFormat != null) {
    const parsedValue = parseInt(valueToFormat, 10);
    const isNegative = parsedValue < 0;
    let valueString =
      parsedValue % 1 > 0
        ? parsedValue.toString().split('.')[0]
        : parsedValue.toString();
    let valueFormatted;

    if (isNegative) valueString = valueString.replace('-', '');
    if (valueString.length > 2) {
      valueFormatted = valueString
        .replace(/\D/g, '')
        .replace(/(\d)(\d{8})$/, '$1.$2')
        .replace(/(\d)(\d{5})$/, '$1.$2')
        .replace(/(\d)(\d{2})$/, '$1,$2');
    } else if (valueString.length === 1) {
      valueFormatted = `0,0${valueString}`;
    } else {
      valueFormatted = `0,${valueString}`;
    }
    return isNegative
      ? `- ${currencyPrefix} ${valueFormatted}`
      : `${currencyPrefix} ${valueFormatted}`;
  }
  return `${currencyPrefix} 0,00`;
};

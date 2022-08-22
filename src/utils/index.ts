export const formatCurrency = (value: number, currency = 'COP') => {
  const intl = Intl.NumberFormat('es-CO', {
    currency,
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  })

  return intl.format(value)
}

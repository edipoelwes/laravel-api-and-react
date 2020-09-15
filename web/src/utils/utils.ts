export const money_br = (value: string) => {
  return value.replace('.', ',')
}

export const stringToFloat = (value: string) => {
  return parseFloat(value.replace(',', '.'))
}
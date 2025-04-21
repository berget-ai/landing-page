export interface PricingRow {
  name: string
  description?: string
  sek?: string
  eur?: string
  badge?: string
  tooltip?: string
  inputprice?: string
  outputprice?: string
  price?: string
}

export interface PricingSectionProps {
  title: string
  rows: PricingRow[]
}

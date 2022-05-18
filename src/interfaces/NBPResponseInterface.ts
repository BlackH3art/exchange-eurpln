export interface NBPResponseInterface {
  table: string;
  currency: string;
  code: string;
  rates: RatesInterface[];
}

interface RatesInterface {
  no: string;
  effectiveDate: string;
  mid: number
}
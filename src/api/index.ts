import axios, { AxiosInstance } from "axios";

const API: AxiosInstance = axios.create({
  baseURL: 'http://api.nbp.pl/api/exchangerates/rates/a/', 
});

export const getPrice = (ticker: string) => API.get(ticker);
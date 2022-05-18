import { AxiosResponse } from "axios";
import { createContext, FC, ReactElement, useEffect, useState } from "react";

import { getPrice } from "../api";
import { AppContextInterface } from "../interfaces/AppContextInterface";
import { NBPResponseInterface } from "../interfaces/NBPResponseInterface";


export const AppContext = createContext<AppContextInterface>({
  euroNBPPrice: 0,
  euroPrice: 0,
  setEuroPrice: () => {},
});


interface Props {
  children: ReactElement;
}

const AppProvider: FC<Props> = ({ children }) => {

  const [euroNBPPrice, setEuroNBPPrice] = useState<number | null>(null);
  const [euroPrice, setEuroPrice] = useState<number | null>(null);
  
  useEffect(() => {

    const fetchEurPrice = async (): Promise<void> => {

      const { data }: AxiosResponse<NBPResponseInterface> = await getPrice('EUR');
      setEuroNBPPrice(data.rates[0].mid);
      setEuroPrice(data.rates[0].mid);
    }

    fetchEurPrice();

  }, []);

  return (
    <>
      <AppContext.Provider value={{
        euroNBPPrice,
        euroPrice,
        setEuroPrice,
      }}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppProvider;
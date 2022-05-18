import { AxiosResponse } from "axios";
import { createContext, FC, ReactElement, useEffect, useState } from "react";
import { getPrice } from "../api";
import { NBPResponseInterface } from "../interfaces/NBPResponseInterface";


export const AppContext = createContext({});


interface Props {
  children: ReactElement;
}

const AppProvider: FC<Props> = ({ children }) => {

  const [eurPlnPrice, setEurPlnPrice] = useState<number>();
  
  useEffect(() => {

    const fetchEurPrice = async (): Promise<void> => {

      const { data }: AxiosResponse<NBPResponseInterface> = await getPrice('EUR');
      setEurPlnPrice(data.rates[0].mid);
    }

    fetchEurPrice();

  }, []);

  return (
    <>
      <AppContext.Provider value={{
        eurPlnPrice
      }}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppProvider;
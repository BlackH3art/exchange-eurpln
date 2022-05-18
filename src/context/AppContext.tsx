import { createContext, FC, ReactElement, useEffect, useState } from "react";


export const AppContext = createContext({});

interface Props {
  children: ReactElement;
}

const AppProvider: FC<Props> = ({ children }) => {

  useEffect(() => {


  });

  return (
    <>
      <AppContext.Provider value={{

      }}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppProvider;
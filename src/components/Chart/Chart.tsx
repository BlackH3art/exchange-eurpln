import { FC } from "react";

import { AdvancedChart, MiniChart } from "react-tradingview-embed";


const Chart: FC = () => {




  return (
    <>
      <div className="w-full lg:w-3/4 xl:w-4/5">

        <div className="hidden lg:block w-full">
          <AdvancedChart widgetProps={{ theme: "dark", symbol: "eurpln" }}/>
        </div>

        <div className="flex lg:hidden w-full justify-center">
          <MiniChart widgetProps={{ symbol: "eurpln", colorTheme: "light" }}/>
        </div>

      </div>
    </>
  )
}

export default Chart
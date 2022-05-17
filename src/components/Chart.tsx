import { FC } from "react";

import { AdvancedChart, MiniChart } from "react-tradingview-embed";


const Chart: FC = () => {




  return (
    <>
      <section className="flex w-full justify-center">

        <div className="hidden lg:block w-full xl:w-3/5">
          <AdvancedChart widgetProps={{ theme: "light", symbol: "eurpln" }}/>
        </div>

        <div className="flex lg:hidden w-full md:w-4/5 justify-center">
          <MiniChart widgetProps={{ symbol: "eurpln", colorTheme: "light" }}/>
        </div>

      </section>
    </>
  )
}

export default Chart
import { FC, useState, FormEvent, FormEventHandler } from "react";
import EuroPriceBox from "../EuroPriceBox/EuroPriceBox";


const TradeForm: FC = () => {

  const [type, setType] = useState<string>("buy");


  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault(); 
  }


  return (
    <>
      <div className="flex flex-col w-full md:w-[60%] lg:w-1/4 xl:w-1/5 lg:border-[1px] lg:border-gray-700">
        <form className="w-full flex flex-col items-center text-white pb-16" onSubmit={handleSubmit}>

          <div className={`w-full flex font-bold border-[1px] border-gray-700 ${type === "buy" ? "bg-green-500" : "bg-red-400"}`}>
            <button className={`w-1/2 py-5 px-5 rounded-br-[2rem] ${type === "buy" ? "bg-transparent font-semibold" : "bg-[#131722] font-light text-gray-400"}`} onClick={() => setType("buy")}>
              buy
            </button>
            <button className={`w-1/2 py-5 px-5 rounded-bl-[2rem] ${type !== "buy" ? "bg-transparent font-semibold" : "bg-[#131722] font-light text-gray-400"}`} onClick={() => setType("sell")}>
              sell
            </button>
          </div>

          <EuroPriceBox />

          <label className="trade-label flex items-center px-5 py-4 mt-4">
            <input type="text" className="trade-input text-left w-full" placeholder="Title" />
          </label>

          <label className="trade-label flex items-center px-5 py-4 mt-4">
            <p className="text-gray-400">Amount</p>
            <input type="number" className="trade-input text-right pr-4 w-full" />
            <p>EUR</p>
          </label>
          
          

          <button type="submit" className={`${type === "buy" ? "bg-green-500" : "bg-red-400" } w-4/5 py-3 mt-5 rounded-[.5rem] `}>
            {type === "buy" ? "BUY" : "SELL"}
          </button>

        </form>
      </div>
    </>
  )
}

export default TradeForm;
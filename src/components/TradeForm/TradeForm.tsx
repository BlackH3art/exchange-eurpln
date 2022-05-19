import { FC, useState, FormEvent, FormEventHandler, ChangeEvent, ChangeEventHandler, useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/AppContext";
import { addTransaction } from "../../redux/features/transactions-slice";
import EuroPriceBox from "../EuroPriceBox/EuroPriceBox";


interface FormData {
  name: string;
  amount: number;
}

const initialFormData: FormData = {
  name: "",
  amount: 0
}

const TradeForm: FC = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { type, setType } = useContext(AppContext);

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault(); 

    dispatch(addTransaction({
      id: "123",
      ...formData,
      type,
    }));

    setFormData({
      name: "",
      amount: 0
    });
    
  }

  const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }


  return (
    <>
      <div className="flex flex-col w-full md:w-[60%] lg:w-1/4 xl:w-1/5 lg:border-[1px] lg:border-gray-700">
        <form className="w-full flex flex-col items-center text-white pb-16">

          <div className={`w-full flex font-bold border-[1px] border-gray-700 ${type === "buy" ? "bg-green-500" : "bg-red-400"}`}>
            <button type="button" className={`w-1/2 py-5 px-5 rounded-br-[2rem] ${type === "buy" ? "bg-transparent font-semibold" : "bg-[#131722] font-light text-gray-400"}`} onClick={() => setType("buy")}>
              buy
            </button>
            <button type="button" className={`w-1/2 py-5 px-5 rounded-bl-[2rem] ${type !== "buy" ? "bg-transparent font-semibold" : "bg-[#131722] font-light text-gray-400"}`} onClick={() => setType("sell")}>
              sell
            </button>
          </div>

          <EuroPriceBox />

          <label className="trade-label flex items-center px-5 py-4 mt-4">
            <input name="name" type="text" className="trade-input text-left w-full" placeholder="Title" onChange={handleChange} value={formData.name}/>
          </label>

          <label className="trade-label flex items-center px-5 py-4 mt-4">
            <p className="text-gray-400">Amount</p>
            <input name="amount" type="number" className="trade-input text-right pr-4 w-full" onChange={handleChange} value={formData.amount} />
            <p>EUR</p>
          </label>
          
          

          <button className={`${type === "buy" ? "bg-green-500" : "bg-red-400" } w-4/5 py-3 mt-5 rounded-[.5rem] `} onClick={handleSubmit}>
            {type === "buy" ? "BUY" : "SELL"}
          </button>

        </form>
      </div>
    </>
  )
}

export default TradeForm;
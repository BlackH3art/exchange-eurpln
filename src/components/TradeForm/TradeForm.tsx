import { FC, useState, FormEvent, FormEventHandler, ChangeEvent, ChangeEventHandler, useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/AppContext";
import { addTransaction } from "../../redux/features/transactions-slice";
import { v4 as uuid } from 'uuid';

import EuroPriceBox from "../EuroPriceBox/EuroPriceBox";


interface FormData {
  name: string;
  amount: number;
}

const initialFormData: FormData = {
  name: "",
  amount: 0
}

interface FormValidationError {
  name: string;
  amount: string;
}

const initialError: FormValidationError = {
  name: "",
  amount: ""
}

const TradeForm: FC = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState<FormValidationError>(initialError);

  const { type, setType } = useContext(AppContext);

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault(); 

    
    // poprawić walidacje - przechodzi z errorem

    if(formData.name.length < 3 || formData.name.length > 50) {
      return setError({ ...error, name: "Use 3-50 characters"});
    } 
    if(formData.amount <= 0) {
      return setError({ ...error, amount: "Zero and negative numbers are not allowed"});
    } 


    if(!error.name && !error.amount) {

      dispatch(addTransaction({
        id: uuid(),
        ...formData,
        type,
      }));
  
      setFormData({
        name: "",
        amount: 0
      });
    }
  }

  const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {

    setError({
      name: "",
      amount: "",
    });

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }


  return (
    <>
      <div className="flex flex-col w-full md:w-[60%] lg:w-1/4 xl:w-1/5 lg:border-r-[1px] lg:border-b-[1px] lg:border-gray-700">
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

          <label className={`${error.name ? 'error-input' : ''} trade-label flex items-center px-5 py-4 mt-4`}>
            <input name="name" type="text" className="trade-input text-left w-full" placeholder="Title" onChange={handleChange} value={formData.name}/>
          </label>
          <p className="text-red-500 font-regular text-sm text-center">
            {error.name}
          </p>

          <label className={`${error.amount ? 'error-input' : ''} trade-label flex items-center px-5 py-4 mt-4`}>
            <p className="text-gray-400">Amount</p>
            <input name="amount" min="0" step="0.01" type="number" className="trade-input text-right pr-4 w-full" onChange={handleChange} value={formData.amount} />
            <p>EUR</p>
          </label>
          <p className="text-red-500 font-regular text-sm text-center">
            {error.amount}
          </p>
          
          

          <button className={`${type === "buy" ? "bg-green-500" : "bg-red-400" } w-4/5 py-3 mt-5 rounded-[.5rem] `} onClick={handleSubmit}>
            {type === "buy" ? "BUY" : "SELL"}
          </button>

        </form>
      </div>
    </>
  )
}

export default TradeForm;
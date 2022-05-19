import { ChangeEvent, FC, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";


const EuroPriceBox: FC = () => {

  const { euroNBPPrice, euroPrice, setEuroPrice } = useContext(AppContext);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    if(Number(e.target.value) > 100) {
      setError("Is hyperinflation already in?");
    } else if(Number(e.target.value) <= 0) {
      setError("Rate cannot be negative or zero");
    } else if(isNaN(Number(e.target.value))) {
      setError("This is not a number");
    } else {
      setError("");
      setEuroPrice(Number(e.target.value));
    }
  }

  return (
    <>
      <div className="w-full flex flex-col items-center text-white">

        <div className="flex w-[90%] justify-between pt-8">
          <p className="text-gray-400">Current NBP Euro rate:</p>
          <p>{euroNBPPrice}</p>
        </div>

        <p className="text-gray-400 pt-5"> EUR / PLN</p>
        <h2 className="text-4xl pb-5">
          {euroPrice === 0 ? euroNBPPrice.toFixed(2) : euroPrice.toFixed(2)}
        </h2>

        <label className={`${error ? "error-input" : ""} trade-label flex items-center px-5 py-4 mt-4`}>
          <p className="text-gray-400">Rate</p>
          <input type="number" min="0" max="100" step="0.01" className="trade-input text-right pr-4 w-3/4" onChange={handleChange} value={euroPrice.toFixed(2)} />
          <p>PLN</p>
        </label>
        <p className="text-red-500 font-regular text-sm text-center">
          {error}
        </p>

      </div>
    </>
  )
}

export default EuroPriceBox;
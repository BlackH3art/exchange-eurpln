import { FC, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { TransactionInterface } from "../../interfaces/TransactionInterface";

interface Props {
  transactions: TransactionInterface[];
}

const TopTransaction: FC<Props> = ({ transactions }) => {

  const { euroPrice } = useContext(AppContext);

  const highestTransaction: TransactionInterface = transactions.sort((a, b) => b.amount - a.amount)[0];

  return (
    <>
      <div className="text-white p-5">

        <div className="flex flex-col">
          <p className="text-gray-400">Name:</p>
          <p className="">
            {highestTransaction?.name}
          </p>
        </div>

        <div className="flex flex-col pt-2">
          <p className="text-gray-400">Volume:</p>
          <div className="flex">
            <p className="pr-10">{highestTransaction?.amount} EUR</p>
            <p>{(highestTransaction?.amount * euroPrice).toFixed(2)} PLN</p>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default TopTransaction;
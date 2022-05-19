import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { TransactionInterface } from "../../interfaces/TransactionInterface";
import { RootState } from "../../redux/store";
import NoTransactionsYet from "./NoTransactionsYet";

import TransactionRow from "./TransactionRow";

const HeaderCell = ({ children }: { children: ReactElement}) => <th className="px-5 py-2 pr-10"> {children} </th>


const TransactionList: FC = () => {

  const transactions: TransactionInterface[] = useSelector<RootState, TransactionInterface[]>((state) => state.transactions.transactions);
  
  return (
    <>
      <div className="w-full p-5 ">

        <p className="text-gray-400">Transaction list</p>

        {transactions.length ? (
        <table>
          <thead>
            <tr className="text-gray-300">
              <HeaderCell>
                <p>#</p>
              </HeaderCell>
              <HeaderCell>
                <p>name</p>
              </HeaderCell>
              <HeaderCell>
                <p>type</p>
              </HeaderCell>
              <HeaderCell>
                <p>amount</p>
              </HeaderCell>
              <HeaderCell>
                <p>change</p>
              </HeaderCell>
            </tr>
          </thead>


          <tbody>
            {transactions.map((item, index) => (
              <TransactionRow 
                key={index}
                id={item.id}
                index={index + 1}
                name={item.name}
                type={item.type}
                amount={item.amount}
              />
            ))}
          </tbody>
        </table>) : (

          <NoTransactionsYet />

        )}

      </div>
    </>
  )
}

export default TransactionList;
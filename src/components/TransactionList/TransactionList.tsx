import { FC, ReactElement } from "react";
import TransactionRow from "./TransactionRow";

const HeaderCell = ({ children }: { children: ReactElement}) => <th className="px-5 py-2 pr-10"> {children} </th>


const TransactionList: FC = () => {


  const mockData = [
    { id: "1", name: "Buy the euro dip", type: "buy", amount: 100 },
    { id: "2", name: "Sell i need to pay rent", type: "sell", amount: 564.32 },
    { id: "3", name: "Buy again, rent can wait", type: "buy", amount: 432.2352 },
    { id: "4", name: "Sell I need to buy bread", type: "sell", amount: 1285.213 },
    { id: "4", name: "Sell I needafjasklfsaflkasfkak to buy bread", type: "sell", amount: 1285.213 },
  ]


  return (
    <>
      <div className="w-full p-5 ">

        <p className="text-gray-400">Transaction list</p>

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
            {mockData.map((item, index) => (
              <TransactionRow 
                key={index}
                index={index + 1}
                name={item.name}
                type={item.type}
                amount={item.amount}
              />
            ))}
          </tbody>

        </table>
      </div>
    </>
  )
}

export default TransactionList;
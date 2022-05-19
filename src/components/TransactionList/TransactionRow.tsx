import { FC, ReactElement, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const BodyCell = ({ children }: { children: ReactElement }) => <td className="px-5 py-2 pr-10"> {children} </td>

interface Props {
  index: number;
  name: string;
  type: string;
  amount: number;
}

const TransactionRow: FC<Props> = ({ index, name, type, amount }) => {

  const { euroPrice } = useContext(AppContext);


  return (
    <>
      <tr className="text-gray-300">
        <BodyCell><p>{index}</p></BodyCell>
        <BodyCell><p>{name}</p></BodyCell>
        <BodyCell><p className={`${type === "buy" ? "bg-green-500" : "bg-red-400"} text-gray-200 rounded-full px-4 py-1`}>{type}</p></BodyCell>
        <BodyCell><p className="text-right">{Number(amount).toFixed(2)} EUR</p></BodyCell>
        <BodyCell>
          <p className={`${type === "buy" ? "text-green-500" : "text-red-400"} text-right`}>
            {type === "buy" ? "+" : "-"} {(Number(amount) * euroPrice).toFixed(2)} PLN
          </p>
        </BodyCell>
      </tr>
    </>
  )
}

export default TransactionRow;
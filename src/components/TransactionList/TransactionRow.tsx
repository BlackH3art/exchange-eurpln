import { FC, ReactElement, useContext } from "react";
import { BsTrash } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/AppContext";
import { deleteTransaction } from "../../redux/features/transactions-slice";

export const BodyCell = ({ children }: { children: ReactElement | null }) => <td className="px-5 py-2 pr-10"> {children} </td>

interface Props {
  id: string;
  index: number;
  name: string;
  type: string;
  amount: number;
}

const TransactionRow: FC<Props> = ({ index, id, name, type, amount }) => {

  const dispatch = useDispatch();

  const { euroPrice } = useContext(AppContext);


  const handleDelete = (id: string) => {
    dispatch(deleteTransaction(id));
  }

  return (
    <>
      <tr className="text-gray-300">
        <BodyCell><p>{index}</p></BodyCell>
        <BodyCell><p>{name}</p></BodyCell>
        <BodyCell><p className={`${type === "buy" ? "bg-green-500" : "bg-red-400"} text-gray-200 rounded-full px-4 py-1`}>{type}</p></BodyCell>
        <BodyCell><p className="text-right">{Number(amount).toFixed(2)} EUR</p></BodyCell>
        <BodyCell>
          <p className={`${type !== "buy" ? "text-green-500" : "text-red-400"} text-right`}>
            {type !== "buy" ? "+" : "-"}{(Number(amount) * euroPrice).toFixed(2)} PLN
          </p>
        </BodyCell>
        <BodyCell>
          <button className="w-[20px] flex justify-center" onClick={() => handleDelete(id)}>
            <BsTrash color="gray"/>
          </button>
        </BodyCell>
      </tr>
    </>
  )
}

export default TransactionRow;
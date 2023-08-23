import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>
      <h3 className="text-slate-300 text-xl font-bold w-full">History</h3>
      <ul>
      </ul>
      {transactions.map((transaction) => (
        <TransactionItem transaction={transaction} deleteTransaction={deleteTransaction}></TransactionItem>
      ))}
        
    </div>
  );
};

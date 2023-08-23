
export const TransactionItem = ({transaction, deleteTransaction}) => {
  return (
    <li className="bg-zinc-600 text.white px-3 py-1 rounded-lg flex w-full justify-between items-center" key={transaction.id}>
          <p className="text-sm">{transaction.description}</p>
          <div>
            <span>${transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            x
          </button> </div>
        </li>
  )
}

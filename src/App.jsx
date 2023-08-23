import Balance from "./components/Balance";
import { ExpenseChat } from "./components/ExpenseChat";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from "./components/Transactions/TransactionForm";
import { TransactionList } from "./components/Transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-2/6">
        <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
          <div>
            <h1 className="text-3x1 font-bold">Expense Tracker</h1>
            {/* <Header></Header> */}
            <IncomeExpenses></IncomeExpenses>
            <Balance></Balance>
            <TransactionForm></TransactionForm>
          </div>

          <div className="flex flex-col flex-1">
          <ExpenseChat></ExpenseChat>
          <TransactionList></TransactionList>
          </div>
        </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

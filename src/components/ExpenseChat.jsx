import { VictoryPie, VictoryLabel} from "victory";
import { useGlobalState } from "../context/GlobalState";

export const ExpenseChat = () => {

    const {transactions} = useGlobalState()

    const total = transactions.reduce((acc, transactions) => (acc += transactions.amount), 0)

    const totalIncome = transactions.filter(transactions => transactions.amount > 0).reduce((acc, transactions) => (acc += transactions.amount), 0)
    const totalExpense = transactions.filter(transactions => transactions.amount < 0).reduce((acc, transactions) => (acc += transactions.amount), 0) * -1

    console.log(total)
    console.log(totalIncome)
    console.log(totalExpense)
    const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100)
    const totalIncomePercentage = 100 - totalExpensePercentage
    console.log(totalExpensePercentage)
    console.log(totalIncomePercentage)

  return (
    <VictoryPie
    colorScale={["#e74c3c", "#2ecc71"]}
  data={[
    { x: "Expenses", y: totalExpensePercentage },
    { x: "Incomes", y: totalIncomePercentage }
  ]}
  animate={{
    duration: 200
  }}
  labels={({datum}) => `${datum.y}%`}
  labelComponent={<VictoryLabel
  angle={45} style={{
    fill: 'white',
  }}>
  </VictoryLabel>}
/>
  )
}

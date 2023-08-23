import React from 'react'
import { useGlobalState } from '../context/GlobalState'

const IncomeExpenses = () => {

    const {transactions } = useGlobalState()
    // console.log(transactions)

    const amounts = transactions.map((trans) => trans.amount)

    const income = amounts
                    .filter(item => item > 0)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2);

    const expense = amounts
                    .filter(item => item < 0 )
                    .reduce((acc, item) => acc += item ,0)
                    .toFixed(2) * -1

  return (
    <>
    <div className="flex justify-between my-2">
        <h4>Ingresos</h4>
        <p>{income}</p>
    </div>

    <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <h4>{expense}</h4>
    </div>
    </>
  )
}

export default IncomeExpenses
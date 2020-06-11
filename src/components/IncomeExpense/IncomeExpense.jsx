import React, { useContext } from 'react'
import './IncomeExpense.css'
import { GlobalContext } from '../../context/GlobalState'

const IncomeExpense = () => {

  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)

  const inflows = amounts.filter(item => item > 0)
                  .reduce((acc, item) => (acc += item), 0)
                  .toFixed(2)

  const outflows = (amounts.filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0)).toFixed(2)

  return (<div className="container">
            <div className="inner-container">
              Inflows: {inflows} | Expense: {outflows}
            </div>
          </div>)
}

export default IncomeExpense;
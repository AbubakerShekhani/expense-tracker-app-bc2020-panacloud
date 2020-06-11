import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../../context/GlobalState'

const TransactionList = () => {
  //const context = useContext(GlobalContext)

  const { transactions } = useContext(GlobalContext)

  console.log(transactions)

  return (<div>
    <h2>Recent Transactions</h2>
    <ul className="transaction-list">
      { transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))
    }
    </ul>


  </div>)
}

export default TransactionList
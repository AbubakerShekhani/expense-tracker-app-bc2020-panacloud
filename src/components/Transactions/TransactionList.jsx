import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../../context/GlobalState'
import Typography from '@material-ui/core/Typography'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (<div>
    <Typography variant="h5" gutterBottom>Recent Transactions</Typography>
    <ul className="transaction-list">
      { transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))
    }
    </ul>


  </div>)
}

export default TransactionList
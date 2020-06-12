import React, { useContext } from 'react'
import './Balance.css'
import { GlobalContext } from '../../context/GlobalState'

import Typography from '@material-ui/core/Typography';


const Balance = () => {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc+= item), 0).toFixed(2)

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Balance
      </Typography>
      <Typography component="p" variant="h4">
        ${total}
      </Typography>
    </React.Fragment>
  )
}

export default Balance
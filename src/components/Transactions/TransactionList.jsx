import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../../context/GlobalState'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)


  return (<div>
    <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="h3" variant="h5">Recent Transactions</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul className="transaction-list">
            { transactions.map(transaction => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))
          }
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>



  </div>)
}

export default TransactionList
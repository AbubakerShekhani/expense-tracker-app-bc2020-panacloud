import React, { useContext } from 'react'
import './IncomeExpense.css'
import { GlobalContext } from '../../context/GlobalState'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridMarginTop: {
    marginTop: 12
  },
  paper: {
    minHeight: 80
  },
  inflows: {
    color: '#009900'
  },
  outflows: {
    color: '#ff3333'
  }
});



const IncomeExpense = () => {


  const classes = useStyles();


  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)

  const inflows = amounts.filter(item => item > 0)
                  .reduce((acc, item) => (acc += item), 0)
                  .toFixed(2)

  const outflows = (amounts.filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0)).toFixed(2)

  return (

    <Grid container spacing={3} className={classes.gridMarginTop} >

        <Grid item xs={6} spacing={2}>
          <Paper className={classes.paper}>

            <Typography component="h3" variant="h6" gutterBottom>
              INCOME
            </Typography>
            <Typography component="p" variant="h5" className={classes.inflows}>
              {inflows}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} spacing={2}>
          <Paper className={classes.paper}>
            <Typography component="h3" variant="h6" gutterBottom>
              EXPENSE
            </Typography>
            <Typography component="p" variant="h5" className={classes.outflows}>
              {outflows}
            </Typography>
          </Paper>
        </Grid>

      </Grid>

  )
}

export default IncomeExpense;
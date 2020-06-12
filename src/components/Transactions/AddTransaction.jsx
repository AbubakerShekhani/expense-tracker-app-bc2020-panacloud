import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddTransaction = () => {
  const [note, setNote] = useState('')
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      note,
      amount: +amount
    }

    if (note !== '' && amount !=='')
    {
      addTransaction(newTransaction);
    }
  }

  const classes = useStyles();

  return (
          <div className={classes.paper}>

            <Typography component="h1" variant="h5">
              Add New Transaction
            </Typography>
            <form className={classes.form} noValidate onSubmit={onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="note"
                label="Note"
                name="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter note for transaction"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="amount"
                label="Amount (use minus for expense)"
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Transaction
              </Button>
            </form>
          </div>
  )
}

export default AddTransaction
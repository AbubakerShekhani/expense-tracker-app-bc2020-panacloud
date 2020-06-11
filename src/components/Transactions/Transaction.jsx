import React, { useContext } from 'react'
import './Transactions.css'
import { GlobalContext } from '../../context/GlobalState'

const Transaction = ({transaction}) => {

  const { deleteTransaction }= useContext(GlobalContext)

  const sign = transaction.amount > 0 ? '+' : '-';
  const signClass = transaction.amount > 0 ? 'plus' : 'minus';

  return (<div className="transaction">
    <li className={signClass}>
      <span className="note">{transaction.note}</span> <span className="amount">{sign}${Math.abs(transaction.amount)}<button  className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button></span>

    </li>
  </div>)
}

export default Transaction
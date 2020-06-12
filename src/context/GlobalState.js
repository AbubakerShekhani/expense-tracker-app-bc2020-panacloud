import React, { createContext, useReducer } from 'react'
import Reducers from './Reducer'

//Initial State
const initialState = {
  transactions: [
    { id: 1, note: 'Income 1', amount: 20000 },
    { id: 2, note: 'Phone Bill', amount: -2000 },
    { id: 3, note: 'Internet Bill', amount: -2000 },
    { id: 4, note: 'Car Fuel', amount: -3800 },
  ]
}

export const GlobalContext = createContext(initialState);


//Provider
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducers, initialState)

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (<GlobalContext.Provider value={{
      transactions:state.transactions,
      deleteTransaction,
      addTransaction
      }}>
    { children }
  </GlobalContext.Provider>)
}


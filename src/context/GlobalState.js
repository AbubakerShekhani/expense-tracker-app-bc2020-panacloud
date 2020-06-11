import React, { createContext, useReducer } from 'react'
import Reducers from './Reducer'

//Initial State
const initialState = {
  transactions: [
    { id: 1, note: 'Note 1', amount: 2000 },
    { id: 2, note: 'Note 2', amount: -10 },
    { id: 3, note: 'Note 3', amount: 10000 },
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


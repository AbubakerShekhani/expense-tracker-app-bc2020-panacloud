import React from 'react';
import './App.css';
import AppHeader from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpense from './components/IncomeExpense/IncomeExpense'
import TransactionList from './components/Transactions/TransactionList'
import AddTransaction from './components/Transactions/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="App container">
        <AppHeader />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

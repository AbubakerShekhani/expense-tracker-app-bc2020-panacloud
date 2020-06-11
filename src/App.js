import React from 'react';
import './App.css';
import AppHeader from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpense from './components/IncomeExpense/IncomeExpense'
import TransactionSummary from './components/Transactions/TransactionSummary'
import AddTransaction from './components/Transactions/AddTransaction'

function App() {
  return (
    <div className="App container">
      <AppHeader />
      <Balance />
      <IncomeExpense />
      <TransactionSummary />
      <AddTransaction />
    </div>
  );
}

export default App;

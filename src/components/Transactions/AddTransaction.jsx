import React, {useState} from 'react'

const AddTransaction = () => {
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState(0)

  return (<div>
    <h2>New Transaction</h2>
    <form>
        <div className="form-control">
          <label htmlFor="text">Note</label>
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter note for transaction" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
  </div>)
}

export default AddTransaction
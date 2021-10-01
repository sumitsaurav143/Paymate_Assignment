import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { TransactionsData } from './TransactionsData';

function App() {

  const [Balance, setBalance] = useState(0);
  const [Transactions, setTransactions] = useState([])

  const val = useRef()

  useEffect(() => {
    const olddata = JSON.parse(localStorage.getItem('Trans'))
    const oldbal = Number(localStorage.getItem('Balance'))
    if (olddata) {
      setTransactions(olddata);
      setBalance(oldbal);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Trans", JSON.stringify(Transactions))
    localStorage.setItem("Balance", Number(Balance))
  }, [Transactions])

  function Add() {
    if (val.current.value !== "") {
      const time = "" + new Date().toJSON()
      setBalance(Balance + Number(val.current.value))
      setTransactions(prev => {
        return [...prev, { id: time, bal: val.current.value, action: "Add" }]
      })
    }
    else
      alert("Give some Input Balance.")
  }

  function Sub() {
    const time = "" + new Date().toJSON()
    if (val.current.value !== "") {
      if (Balance >= val.current.value) {
        setBalance(Balance - val.current.value)
        setTransactions(prev => {
          return [...prev, { id: time, bal: val.current.value, action: "Remove" }]
        })
      }
      else
        alert("Transaction Denied!! Low Balance.")
    }
    else
      alert("Give some Input Balance.")
  }


  return (
    <div className="App">
      <div>
        <div id="inp_box">
          <h2>💰 BALANCE: {Balance}</h2>
          <input ref={val} type="number"></input>
          <div>
            <button onClick={Add}>ADD</button>
            <button onClick={Sub}>REMOVE</button>
          </div>

        </div>
        <div id="transaction_box">
          <h2>🎯 Transaction Details:-</h2>
          <table>
            <tr id="t_row">
              <th id="t_data"> Date/Time </th>
              <th id="t_data">Amount</th>
              <th id="t_data">Action</th>
            </tr>
            <TransactionsData data={Transactions} />
          </table>

        </div>

      </div>
    </div>
  );
}

export default App;

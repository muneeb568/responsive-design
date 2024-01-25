import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredAmount, SetenteredAmount] = useState("");
  const [enteredDate, Setentereddate] = useState("");

  const TitleChanger = (event) => {
    setenteredtitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    SetenteredAmount(event.target.value);
  };
  const Datechangehandler = (event) => {
    Setentereddate(event.target.value);
  };
  const Submithandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.SaveExpenseData(expenseData);
    setenteredtitle("");
    SetenteredAmount("");
    Setentereddate("");
  };

  return (
    <form onSubmit={Submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={enteredtitle} onChange={TitleChanger} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={Datechangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

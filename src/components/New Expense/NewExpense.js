import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpensedatahandler = (enteredexpensedata) => {
    const ExpenseData = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm SaveExpenseData={saveExpensedatahandler} />
    </div>
  );
};

export default NewExpense;

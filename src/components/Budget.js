import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, updateBudget, expenses, currency } = useContext(AppContext);
  const [budgetInput, setBudgetInput] = useState(budget.toString());
  const expenseTotal = expenses.reduce((total, expense) => total + expense.cost, 0);

  const handleChange = (event) => {
    setBudgetInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBudget = parseFloat(budgetInput);
    if (!isNaN(newBudget)) {
      updateBudget(newBudget);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='alert alert-secondary'>
          Budget in {currency}:
          <input
            type='number'
            placeholder='Enter budget'
            value={budgetInput}
            onChange={handleChange}
            max={20000}
          />
        </div>
        <button type='submit' className='btn btn-outline-primary'>
          Save
        </button>
      </form>
      {expenseTotal > budget && (
        <div className='alert alert-danger mt-3'>
          Expense total exceeds the budget!
        </div>
      )}
      {/* <div className='alert alert-info mt-3'>
        Budget in {currency}: {currency} {budget}
      </div> */}
    </div>
  );
};

export default Budget;
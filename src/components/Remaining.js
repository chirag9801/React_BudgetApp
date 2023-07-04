


import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => {
    return (total += expense.cost);
  }, 0);

  // Calculate remaining budget
  const remainingBudget = budget - totalExpenses;

  return (
    <div className='alert alert-dark'>
      <h4>Remaining Budget: {currency}{remainingBudget}</h4>
    </div>
  );
};

export default Remaining;
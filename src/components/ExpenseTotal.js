

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses,currency } = useContext(AppContext);
  const total = expenses.reduce((acc, expense) => acc + expense.cost, 0);

  return (
    <div className='alert alert-primary'>
      <span>Total: {currency}{total}</span>
    </div>
  );
};

export default ExpenseTotal;
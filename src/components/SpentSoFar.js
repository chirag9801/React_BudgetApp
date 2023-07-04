
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SpentSoFar = () => {
  const { expenses, currency } = useContext(AppContext);

  // Calculate total spent
  const totalSpent = expenses.reduce((total, expense) => {
    return (total += expense.cost);
  }, 0);

  return (
    <div className='alert alert-info'>
      <h4>Spent So Far: {currency} {totalSpent}</h4>
    </div>
  );
};

export default SpentSoFar;
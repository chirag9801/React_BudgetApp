

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses, removeExpense, incrementExpense, decrementExpense, currency } = useContext(AppContext);

  const handleRemoveExpense = (id) => {
    removeExpense(id);
  };

  const handleIncrementExpense = (id) => {
    incrementExpense(id);
  };

  const handleDecrementExpense = (id) => {
    decrementExpense(id);
  };

  return (
    <div className='mt-4'>
      <h3>Allocation</h3>
      {expenses.length === 0 ? (
        <p>No expenses recorded.</p>
      ) : (
        <ul className='list-group'>
          <li className='list-group-item d-flex justify-content-between align-items-center'>
            <strong>Department</strong>
            <strong>Allocated Budget</strong>
            <strong className='text-center'>Increase by 10</strong>
            <strong>Decrease by 10</strong>
            <strong>Remove</strong>
          </li>
          {expenses.map((expense) => (
            <li
              className='list-group-item d-flex justify-content-between align-items-center'
              key={expense.id}
            >
              <span>{expense.name}</span>
              <span className='btn btn-light align-items-center'>{currency}{expense.cost}</span>
              <button
                className='btn btn-success me-2'
                onClick={() => handleIncrementExpense(expense.id)}
              >
                +10
              </button>
              <button
                className='btn btn-danger'
                onClick={() => handleDecrementExpense(expense.id)}
              >
                -10
              </button>
              <button
                className='btn btn-danger'
                onClick={() => handleRemoveExpense(expense.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
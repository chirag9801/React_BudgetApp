

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost }) => {
  const { deleteExpense, currency } = useContext(AppContext);

  const handleDelete = () => {
    deleteExpense(id);
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {name}
      <div>
        <span className='badge badge-primary badge-pill'>
          {currency} {cost}
        </span>
        <button className='btn btn-danger btn-sm' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
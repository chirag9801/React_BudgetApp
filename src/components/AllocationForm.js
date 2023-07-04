

import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
  const { addExpense, currency } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [allocationType, setAllocationType] = useState('add');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && cost) {
      const expenseCost = allocationType === 'add' ? parseFloat(cost) : -parseFloat(cost);
      addExpense(name, expenseCost);
      setName('');
      setCost('');
    }
  };

  const handleAllocationTypeChange = (event) => {
    setAllocationType(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row mt-3'>
        <div className='col-sm'>
          <div className='form-group'>
            <label htmlFor='name'>Department:</label>
            <select
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value=''>Select category</option>
              <option value='Marketing'>Marketing</option>
              <option value='Finance'>Finance</option>
              <option value='IT'>IT</option>
              <option value='Sales'>Sales</option>
              <option value='Human Resources'>HR</option>
            </select>
          </div>
        </div>

        <div className='col-sm'>
          <div className='form-group'>
            <label htmlFor='cost'>Allocation:{currency}</label>
            <input
              type='number'
              className='form-control'
              id='cost'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
        </div>

        <div className='col-sm'>
          <div className='form-group'>
            <label htmlFor='allocationType'>Allocation Type:</label>
            <select
              className='form-control'
              id='allocationType'
              value={allocationType}
              onChange={handleAllocationTypeChange}
            >
              <option value='add'>Add</option>
              <option value='reduce'>Reduce</option>
            </select>
          </div>
        </div>

        <div className='col-sm'>
          <button type='submit' className='alert alert-dark btn-lg'>
            {allocationType === 'add' ? 'Add' : 'Reduce'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AllocationForm;
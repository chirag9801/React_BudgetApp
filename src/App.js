import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Location from './components/Location';
import SpentSoFar from './components/SpentSoFar';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>

        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <SpentSoFar />
          </div>
          <div className='col-sm'>
            <Location />
          </div>
        </div>

        <h3 className='mt-3'>Shopping Cart</h3>
        <div className='row'>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>

        <h3 className='mt-3'>Change Allocation</h3>
        <div className='row mt-3'></div>

        <div className='row'>
          <div className='col-sm'>
            <AllocationForm />
          </div>
          <div>
      {/* ... */}
      <Remaining ExpenseList={ExpenseList} Budget={Budget} Location={Location} />
      {/* ... */}
    </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;

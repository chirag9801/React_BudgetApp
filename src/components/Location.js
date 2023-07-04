import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { currency, changeCurrency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    changeCurrency(newCurrency);
  };

  return (
    <div className='alert alert-secondary'>
      <label htmlFor='currency' className='mr-2'>
        Currency:
      </label>
      <select
        name='currency'
        id='currency'
        className='form-select currency-dropdown'
        value={currency}
        onChange={handleCurrencyChange}
      >
        <option value='$' className='alert alert-info'>
          $ Dollar
        </option>
        <option value='£' className='alert alert-info'>
          £ Pound
        </option>
        <option value='€' className='alert alert-info'>
          € Euro
        </option>
        <option value='₹' className='alert alert-info'>
          ₹ Rupee
        </option>
      </select>
    </div>
  );
};

export default Location;
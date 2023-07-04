import React, { createContext, useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [budget, setBudget] = useState(0);
  const [currency, setCurrency] = useState('$'); // Add currency state
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const addExpense = (name, cost) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        id: uuidv4(),
        name,
        cost: parseFloat(cost),
      },
    });
  };

  const removeExpense = (id) => {
    dispatch({
      type: 'REMOVE_EXPENSE',
      payload: id,
    });
  };

  return (
    <AppContext.Provider
      value={{
        budget,
        currency, // Include currency in the context value
        expenses,
        updateBudget,
        changeCurrency, // Add changeCurrency to the context value
        addExpense,
        removeExpense,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};



export { AppContext, AppProvider };
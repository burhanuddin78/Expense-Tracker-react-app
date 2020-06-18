import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Inital State
const initialState = {
  transaction: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'salary', amount: 300 },
    { id: 3, text: 'book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function AddTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transaction,
        deleteTransaction,
        AddTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

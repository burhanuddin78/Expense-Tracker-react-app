import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, settext] = useState('');
  const [amount, setamount] = useState(0);

  const { AddTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const addintransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };

    AddTransaction(addintransaction);
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder='Enter Text...'></input>
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, postive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            placeholder='Enter Amount...'></input>
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

import css from './Form.module.css';
import React, { useState } from 'react';

export const Form = ({onAddContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 const onFormSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: name,
      number: Number.parseFloat(number),
    };

   onAddContact(newUser);
   setName('');
   setNumber('');
  };

  const onChangeInput = e => {
    const value = e.target.value;
    const nameInput = e.target.name;
    switch (nameInput) {
      case 'name':
        setName(value);
        return;
      
      case 'number':
        setNumber(value);
        return;
      
      default:
        return;
    }
  };

    return (
      <form className={css.form} onSubmit={onFormSubmit}>
        <label className={css.labelForm}>Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className={css.inputForm}
          value={name}
          onChange={onChangeInput}
        />
        <label className={css.labelForm}>Number</label>
        <input
          type="tel"
          name="number"
          required
          placeholder="Your number"
          pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
          className={css.inputForm}
          value={number}
          onChange={onChangeInput}
        />
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </form>
    );
  }

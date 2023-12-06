import React from 'react';
import css from 'components/Filter/Filter.module.css';

export const Filter = ({ changeInput, filter }) => {
  return (
    <div className={css.container}>
      <label className={css.labelForm}>Find contact by name</label>
      <input
        type="text"
        name="filter"
        className={css.inputForm}
        onChange={changeInput}
        value={filter}
      />
    </div>
  );
};
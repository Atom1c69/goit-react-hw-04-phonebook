import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from 'components/Form/Form.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ??
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringJsonContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringJsonContacts);
  }, [contacts]);
    
  
  const onChangeInput = e => {
    const value = e.target.value;
    setFilter(value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const onAddContact = newUser => {
    const hasDuplicates = contacts.some(
      item =>
        item.name.toLowerCase() === newUser.name.toLowerCase() ||
        item.number === newUser.number
    );

    if (hasDuplicates) {
      alert(
        `A contact with the name: '${newUser.name}' and number: '${newUser.number}' is already in the list!`
      );
      return;
    }

    const user = {
      ...newUser,
      id: nanoid(),
    };

    setContacts(prevState =>  [...prevState, user]);
  };

 
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <Form onAddContact={onAddContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter changeInput={onChangeInput} filter={filter} />
        <ContactList
          option={filterContacts()}
          deleteContact={onDeleteContact}
        />
      </div>
    );
  }

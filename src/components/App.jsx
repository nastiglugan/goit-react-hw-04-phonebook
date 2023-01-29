import React, { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { MainTitle, Title } from './App.styled';

const initialContacts = () =>
  JSON.parse(localStorage.getItem('contacts')) ?? [];

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const findContact = contacts.find(contact => contact.name === name);

    if (findContact) {
      alert(`${name} is already in contact`);
      return;
    }

    setContacts(prevState => [
      ...prevState,
      { id: nanoid(), name: name, tel: number },
    ]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <Form onSubmit={formSubmitHandler} />

      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactList
          contacts={getVisibleContacts}
          deleteContact={deleteContact}
        />
      )}
    </>
  );
};

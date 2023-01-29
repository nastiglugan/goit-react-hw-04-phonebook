import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import { MainTitle, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('work mount');
    const contacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(contacts);

    if (parsContacts !== null) {
      this.setState({ contacts: parsContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('work update');
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;

    const findContact = contacts.find(contact => contact.name === name);

    if (findContact) {
      alert(`${name} is already in contact`);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name, tel: number },
      ],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <MainTitle>Phonebook</MainTitle>
        <Form onSubmit={this.formSubmitHandler} />

        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </>
    );
  }
}

export default App;

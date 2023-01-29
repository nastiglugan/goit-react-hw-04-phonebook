import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormWrap, Label, Input, BtnForm } from './Form.styled';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleIputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
      console.log(event.target.value);
    }
    if (event.target.name === 'number') {
      setNumber(event.target.value);
      console.log(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(name, number);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleIputChange}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+380XXXXXXXXX"
          value={number}
          onChange={handleIputChange}
        />
      </Label>
      <BtnForm type="submit">Add contact</BtnForm>
    </FormWrap>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

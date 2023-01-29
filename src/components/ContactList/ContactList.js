import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactWrap, List, ContactTitle } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactWrap>
      <ContactTitle>Contact List</ContactTitle>
      <List>
        {contacts.map(contact => {
          const { id } = contact;
          return (
            <li key={id}>
              <ContactItem
                contactsItem={contact}
                deleteContact={deleteContact}
              />
            </li>
          );
        })}
      </List>
    </ContactWrap>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

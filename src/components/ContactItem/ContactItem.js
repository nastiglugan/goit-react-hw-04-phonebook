import PropTypes from 'prop-types';
import {
  ContactItemWrap,
  ListItems,
  Item,
  DeleteBtn,
} from './ContactItem.styled';

export const ContactItem = ({ contactsItem, deleteContact }) => {
  const { name, tel, id } = contactsItem;
  return (
    <ContactItemWrap>
      <ListItems>
        <Item>Name:{name}</Item>
        <Item>Tel:{tel}</Item>
      </ListItems>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </ContactItemWrap>
  );
};

ContactItem.propTypes = {
  contactsItem: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

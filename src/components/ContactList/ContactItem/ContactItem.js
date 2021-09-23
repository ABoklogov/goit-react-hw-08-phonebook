import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperation } from 'redux/contacts';
import { Button } from 'react-bootstrap';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(contactsOperation.deletContacts(id));
  };

  return (
    <>
      <p className={s.contactName}>{name}:</p>
      <p className={s.contactNumber}>{number}</p>
      <Button className={s.contactBtn} onClick={() => deleteContact(id)}>
        delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

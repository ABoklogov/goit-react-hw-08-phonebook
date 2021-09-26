import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperation, contactsSelectors } from 'redux/contacts';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isChangeListContacts = useSelector(
    contactsSelectors.getChangeListContacts,
  );

  const deleteContact = id => {
    dispatch(contactsOperation.deletContacts(id));

    if (isChangeListContacts) {
      toast.success(`Contact ${name} deleted`, { theme: 'colored' });
    }
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

import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  contactsOperation,
  contactsSelectors,
  contactsAction,
} from 'redux/contacts';
import { toast } from 'react-toastify';
import { Dropdown } from 'react-bootstrap';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isChangeListContacts = useSelector(
    contactsSelectors.getChangeListContacts,
  );
  const isModalOpen = useSelector(contactsSelectors.isModalOpen);

  const deleteContact = id => {
    dispatch(contactsOperation.deletContacts(id));

    if (isChangeListContacts) {
      toast.success(`Contact ${name} deleted`, { theme: 'colored' });
    }
  };

  const controlModal = () => {
    if (!isModalOpen) {
      dispatch(contactsAction.modalOpen());
    } else {
      dispatch(contactsAction.modalClose());
    }
  };

  return (
    <>
      <p className={s.contactItem}>
        {name}: {number}
      </p>

      <Dropdown className={s.dropdown}>
        <Dropdown.Toggle
          className={s.dropdownToggle}
          variant="Secondary"
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className={s.dropdownChange} onClick={controlModal}>
            change
          </Dropdown.Item>
          <Dropdown.Item
            className={s.dropdownDelete}
            onClick={() => deleteContact(id)}
          >
            delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

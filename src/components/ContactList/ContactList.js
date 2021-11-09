import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { ListGroup } from 'react-bootstrap';
import s from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = () => {
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <ListGroup className={s.contactList} variant="flush">
      {visibleContacts?.map(({ id, name, number }) => (
        <ListGroup.Item key={id} className={s.contact}>
          <ContactItem id={id} name={name} number={number} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ContactList;

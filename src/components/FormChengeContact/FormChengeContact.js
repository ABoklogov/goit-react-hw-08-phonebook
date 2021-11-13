import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsOperation,
  contactsSelectors,
  contactsAction,
} from 'redux/contacts';
import { FloatingLabel, Form, Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const FormChengeContact = () => {
  const dispatch = useDispatch();
  const changeContact = useSelector(contactsSelectors.changedContact);
  const isModalOpen = useSelector(contactsSelectors.isModalOpen);
  const contacts = useSelector(contactsSelectors.getContacts);
  const isChangeListContacts = useSelector(
    contactsSelectors.getChangeListContacts,
  );
  const [name, setName] = useState(changeContact.name);
  const [number, setNumber] = useState(changeContact.number);

  const handleNameChenge = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };

    const checkingContacts = el =>
      el?.name.toLowerCase() === name.toLowerCase();

    if (changeContact.name === name && changeContact.number === number) {
      toast.warn('Change at least one field', { theme: 'colored' });
      return;
    }
    if (contacts.some(checkingContacts) && changeContact.number === number) {
      toast.warn(`${name} is alreaby in contacts`, { theme: 'colored' });
      return;
    }

    dispatch(contactsOperation.changeContact(changeContact.id, newContact));

    if (!isModalOpen) {
      dispatch(contactsAction.modalOpen());
    } else {
      dispatch(contactsAction.modalClose());
    }
    if (isChangeListContacts) {
      toast.success(`Contact ${name} changed`, { theme: 'colored' });
    }
    setName('');
    setNumber('');
    dispatch(contactsAction.changeContact({}));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChenge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          maxLength="20"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Phone">
        <Form.Control
          type="tel"
          name="number"
          placeholder="Phone"
          value={number}
          onChange={handleNameChenge}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          maxLength="20"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </FloatingLabel>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default FormChengeContact;

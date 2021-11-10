import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperation, contactsSelectors } from 'redux/contacts';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isChangeListContacts = useSelector(
    contactsSelectors.getChangeListContacts,
  );

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
    const checkingContacts = el => el.name.toLowerCase() === name.toLowerCase();

    if (contacts.some(checkingContacts)) {
      toast.warn(`${name} is alreaby in contacts`, { theme: 'colored' });
      return;
    }
    dispatch(contactsOperation.postContact(newContact));
    if (isChangeListContacts) {
      toast.success(`Contact ${name} added`, { theme: 'colored' });
    }
    setName('');
    setNumber('');
  };

  return (
    <Form className={s.form} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className={s.text}>Name</Form.Label>
        <Form.Control
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChenge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          maxLength="20"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTel">
        <Form.Label className={s.text}>Number</Form.Label>
        <Form.Control
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleNameChenge}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          maxLength="20"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Form.Group>

      <Button className={s.btn} variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;

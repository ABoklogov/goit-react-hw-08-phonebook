import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsOperation,
  contactsSelectors,
  contactsAction,
} from 'redux/contacts';
import { FloatingLabel, Form, Modal, Button } from 'react-bootstrap';

const FormChengeContact = () => {
  const dispatch = useDispatch();
  const changeContact = useSelector(contactsSelectors.changedContact);
  const isModalOpen = useSelector(contactsSelectors.isModalOpen);
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

    dispatch(contactsOperation.changeContact(newContact));

    if (!isModalOpen) {
      dispatch(contactsAction.modalOpen());
    } else {
      dispatch(contactsAction.modalClose());
    }
    setName('');
    setNumber('');
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
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Phone">
        <Form.Control
          type="tel"
          name="number"
          placeholder="Phone"
          value={number}
          onChange={handleNameChenge}
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

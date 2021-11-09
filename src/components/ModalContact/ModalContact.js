import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsAction } from 'redux/contacts';
import { Modal, Button } from 'react-bootstrap';
// import s from './ModalContact.module.css'

const ModalContact = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(contactsSelectors.isModalOpen);

  const controlModal = () => {
    if (!isModalOpen) {
      dispatch(contactsAction.modalOpen());
    } else {
      dispatch(contactsAction.modalClose());
    }
  };

  return (
    <>
      <Modal centered="true" show={isModalOpen} onHide={controlModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={controlModal}>
            Close
          </Button>
          <Button variant="primary" onClick={controlModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContact;

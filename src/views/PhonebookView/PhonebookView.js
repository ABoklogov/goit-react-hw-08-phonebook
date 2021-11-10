import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  contactsSelectors,
  contactsOperation,
  contactsAction,
} from 'redux/contacts';
import { authSelectors } from 'redux/auth';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ModalContact from 'components/Modal';
import FormChengeContact from 'components/FormChengeContact';
import { Spinner, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

import s from './PhonebookView.module.css';

const PhonebookView = () => {
  const loading = useSelector(contactsSelectors.getLoading);
  const _error = useSelector(contactsSelectors.getError);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isModalOpen = useSelector(contactsSelectors.isModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(contactsOperation.fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const controlModal = () => {
    if (!isModalOpen) {
      dispatch(contactsAction.modalOpen());
    } else {
      dispatch(contactsAction.modalClose());
    }
  };

  return (
    <div className={s.PhonebookView}>
      <ModalContact>
        <Modal centered="true" show={isModalOpen} onHide={controlModal}>
          <Modal.Header closeButton>Change the fields you want</Modal.Header>
          <Modal.Body>
            <FormChengeContact />
          </Modal.Body>
        </Modal>
      </ModalContact>

      <div className={s.PhonebookBoxForm}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={s.contactsFilter}>
        <h2>Contacts</h2>
        <Filter />
      </div>

      <div>
        {loading && <Spinner className={s.Spinner} animation="border" />}
        {!loading && <ContactList />}
      </div>

      {_error && toast.error(_error, { theme: 'colored' })}
    </div>
  );
};

export default PhonebookView;

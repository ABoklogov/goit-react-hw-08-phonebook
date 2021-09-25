import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperation } from 'redux/contacts';
import { authSelectors } from 'redux/auth';
import { Spinner } from 'react-bootstrap';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import s from './PhonebookView.module.css';
import { toast } from 'react-toastify';

const PhonebookView = () => {
  const loading = useSelector(contactsSelectors.getLoading);
  const _error = useSelector(contactsSelectors.getError);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(contactsOperation.fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={s.PhonebookView}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading && <Spinner className={s.Spinner} animation="border" />}
      {!loading && <ContactList />}
      {_error && toast.error(_error, { theme: 'colored' })}
    </div>
  );
};

export default PhonebookView;

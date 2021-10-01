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
      <div>
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

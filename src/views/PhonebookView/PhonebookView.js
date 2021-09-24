import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperation } from 'redux/contacts';
import { authSelectors } from 'redux/auth';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import s from './PhonebookView.module.css';

const PhonebookView = () => {
  const loading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);
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
      {loading && <h1>Loading...</h1>}
      {!loading && <ContactList />}
      {error && alert(error)}
    </div>
  );
};

export default PhonebookView;

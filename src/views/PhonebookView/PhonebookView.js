import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const PhonebookView = () => {
  const loading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading && <h1>Loading...</h1>}
      {!loading && <ContactList />}
      {error && alert(error)}
    </>
  );
};

export default PhonebookView;

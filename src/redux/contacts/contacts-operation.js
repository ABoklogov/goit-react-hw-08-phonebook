import API from 'services/contacts-api';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
} from './contacts-action';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await API.fetchContacts();
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

export const postContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const { data } = await API.postContacts(contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deletContacts = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await API.deleteContacts(id);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export const changeContact = newContact => async dispatch => {
  dispatch(changeContactRequest());
  try {
    console.log(newContact);
    const contact = await API.changeContact(newContact);
    dispatch(changeContactSuccess(contact.id, contact));
  } catch (error) {
    dispatch(changeContactError(error.message));
  }
};

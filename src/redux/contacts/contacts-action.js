import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contact/fetchContactRequest');
export const fetchContactSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactError = createAction('contact/fetchContactError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction(
  'contact/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contact/deleteContactSuccess',
);
export const deleteContactError = createAction('contact/deleteContactError');

export const setContacts = createAction('contacts/Set');

export const chengeFilter = createAction('contacts/Filter', e => ({
  payload: e.target.value,
}));

export const modalOpen = createAction('contacts/modalOpen');
export const modalClose = createAction('contacts/modalClose');

export const changeContactRequest = createAction(
  'contact/changeContactRequest',
);
export const changeContactSuccess = createAction(
  'contact/changeContactSuccess',
);
export const changeContactError = createAction('contact/changeContactError');

export const changeContact = createAction('contact/changeContact');

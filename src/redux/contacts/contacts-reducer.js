import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
  setContacts,
  chengeFilter,
} from './contacts-action';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),

  [setContacts]: (_, { payload }) => [...payload],
});

const filter = createReducer('', {
  [chengeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => alert(payload),
  [fetchContactRequest]: () => null,

  [addContactError]: (_, { payload }) => alert(payload),
  [addContactRequest]: () => null,

  [deleteContactError]: (_, { payload }) => alert(payload),
  [deleteContactRequest]: () => null,
});

const contactsReducer = combineReducers({
  items,
  filter,
  isLoading,
  error,
});

export default contactsReducer;

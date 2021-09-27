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
  [fetchContactError]: (_, { payload }) => payload,
  [fetchContactRequest]: () => null,
  [fetchContactSuccess]: () => null,

  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,
  [addContactSuccess]: () => null,

  [deleteContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => null,
  [deleteContactSuccess]: () => null,
});

const isChangeListContacts = createReducer(true, {
  [addContactRequest]: () => false,
  [addContactSuccess]: () => true,
  [addContactError]: () => false,

  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => true,
  [deleteContactError]: () => false,
});

const contactsReducer = combineReducers({
  items,
  filter,
  isLoading,
  error,
  isChangeListContacts,
});

export default contactsReducer;

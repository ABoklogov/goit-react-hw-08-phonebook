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
  modalOpen,
  modalClose,
  changeContact,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
} from './contacts-action';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),

  [changeContactSuccess]: (state, { payload }) => {
    const idx = state.findIndex(item => item.id === payload.id);
    if (idx === -1) {
      return;
    }
    state.splice(idx, 1, payload);
  },

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

  [changeContactRequest]: () => true,
  [changeContactSuccess]: () => false,
  [changeContactError]: () => false,
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

  [changeContactRequest]: (_, { payload }) => payload,
  [changeContactSuccess]: () => null,
  [changeContactError]: () => null,
});

const isChangeListContacts = createReducer(true, {
  [addContactRequest]: () => false,
  [addContactSuccess]: () => true,
  [addContactError]: () => false,

  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => true,
  [deleteContactError]: () => false,

  [changeContactRequest]: () => false,
  [changeContactSuccess]: () => true,
  [changeContactError]: () => false,
});

const isModalOpen = createReducer(false, {
  [modalOpen]: () => true,
  [modalClose]: () => false,
});

const changedContact = createReducer(
  {},
  {
    [changeContact]: (_, { payload }) => ({ ...payload }),
  },
);

const contactsReducer = combineReducers({
  items,
  filter,
  isLoading,
  error,
  isChangeListContacts,
  isModalOpen,
  changedContact,
});

export default contactsReducer;

import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getChangeListContacts = state =>
  state.contacts.isChangeListContacts;

export const getVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const isModalOpen = state => state.contacts.isModalOpen;

export const changedContact = state => state.contacts.changedContact;

import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from 'services/contacts-api';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/requestStatus',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  },
);

// export const postContact = createAsyncThunk(
//   'contacts/requestStatus',
//   async contact => await contactsAPI.postContacts(contact),
// );

// export const deletContacts = createAsyncThunk(
//   'contacts/requestStatus',
//   async id => await contactsAPI.deleteContacts(id),
// );

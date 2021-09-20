import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as contactsAPI from 'services/contacts-api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('aurh/register', async credentials => {
  const { data } = await contactsAPI.uathRegister(credentials);
  token.set(data.token);
  return data;
});

const operations = {
  register,
  // logOut,
  // logIn,
  // fetchCurrentUser,
};
export default operations;

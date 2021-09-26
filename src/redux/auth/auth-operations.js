import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API from 'services/contacts-api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.registerUser(credentials);

      if (data === undefined) {
        throw new Error('Server Error!');
      }

      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.logInUser(credentials);

      if (data === undefined) {
        throw new Error('Server Error!');
      }

      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await API.logOutUser();

    token.unset();
  } catch (error) {
    return error.message;
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await API.fetchCurrentUser();

      if (data === undefined) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;

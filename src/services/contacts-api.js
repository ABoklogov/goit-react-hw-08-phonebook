import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

async function registerUser(credentials) {
  const data = await axios.post('/users/signup', credentials);
  return data;
}

async function logInUser(credentials) {
  const data = await axios.post('/users/login', credentials);
  return data;
}

async function logOutUser() {
  axios.post('/users/logout');
}

async function fetchCurrentUser() {
  const data = await axios.get('/users/current');
  return data;
}

async function fetchContacts() {
  const data = await axios.get('/contacts');
  return data;
}

async function postContacts(contact) {
  const data = await axios.post('/contacts', contact);
  return data;
}

async function deleteContacts(contactsId) {
  await axios.delete(`/contacts/${contactsId}`);
}

async function changeContact(contactsId) {
  await axios.patch(`/contacts/${contactsId}`);
}

const API = {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
  fetchContacts,
  postContacts,
  deleteContacts,
  changeContact,
};
export default API;

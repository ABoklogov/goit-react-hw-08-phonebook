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

// async function fetchContacts() {
//   const { data } = await axios.get('/contacts');
//   return data;
// }

// async function postContacts(contact) {
//   await axios.post('/contacts', contact);
// }

// async function deleteContacts(contactsId) {
//   await axios.delete(`/contacts/${contactsId}`);
// }
const API = {
  registerUser,
  logInUser,
  //   fetchContacts,
  //   postContacts,
  //   deleteContacts,
};
export default API;

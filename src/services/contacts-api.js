import axios from 'axios';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContacts(contact) {
  await axios.post('/contacts', contact);
}

export async function deleteContacts(contactsId) {
  await axios.delete(`/contacts/${contactsId}`);
}

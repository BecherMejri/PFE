import axios from 'axios';
const apiurl = 'https://localhost:5000/bodyType';

export async function getAllUsers() {
  return await axios.get(`${apiurl}/getAllusers`);
}

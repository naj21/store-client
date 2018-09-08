import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('http://localhost:1337/signup', userData);
  }
}

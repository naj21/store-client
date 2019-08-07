import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('https://naj-store-server.herokuapp.com/signup', userData);
  }
}

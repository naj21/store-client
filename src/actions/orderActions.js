import axios from 'axios';

export function order(data) {
  return dispatch => {
    return axios.post('https://naj-store-server.herokuapp.com/order', data).then(res => {
      console.log(res)
    });
  }
}

import axios from 'axios';

export function order(data) {
  return dispatch => {
    return window.axios.post('http://localhost:1337/order', data).then(res => {
      console.log(res)
    });
  }
}

import axios from 'axios';

import { url } from './config';

 
let getDemo = (params) => { 
  return axios.get(`${url}`, {
    params: params
  });
}
let postDemo = (params) => { 
  return axios.post(`${url}`, params);
}

export {
  getDemo,
  postDemo
}

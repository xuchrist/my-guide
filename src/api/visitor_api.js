import axios from 'axios';

import { url } from './config';
axios.defaults.baseURL=`${url}`;
 
let getDemo = (params) => { 
  return axios.get(`${url}`, {
    params: params
  });
}
let postDemo = (params) => { 
  return axios.post(`${url}`, params);
}
let getPersonInfo=(params)=>{
  return axios.get("posts", {
    params: params
  });
}
export {
  getDemo,
  postDemo,
  getPersonInfo
}

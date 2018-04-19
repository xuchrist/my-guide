import axios from 'axios';

import { url } from './config';
axios.defaults.baseURL=`${url}`;

let getDemo = (params) => { 
  return axios.get("", {
    params: params
  });
}
let postDemo = (params) => { 
  return axios.post("", params);
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

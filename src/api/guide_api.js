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

let uploadPic=function(params){

  // let file = e.target.files[0];
  // let param = new FormData(); //创建form对象
  // param.append('file', file, file.name); //通过append向form对象添加数据
  // param.append('chunk', '0'); //添加form表单中其他数据
  // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
  let config = {
    headers:{'Content-Type':'multipart/form-data'}
  }; 
  return axios.post("",params,config);
}

export {
  getDemo,
  postDemo,
  getPersonInfo,
  uploadPic
}

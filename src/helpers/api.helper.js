import * as ApiBase from './apiBase.helper';

const URL_API_BASE='https://valetwarranty.com/wp-json/wv/v1/';

const Login=async (obj={})=> {
    const url=URL_API_BASE+'login';
    const res=await ApiBase.PostRequest(url,obj);
    return res;
}

export {
    Login
}
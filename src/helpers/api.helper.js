import * as ApiBase from './apiBase.helper';
import Storage from './storage.helper';

const URL_API_BASE = 'https://valetwarranty.com/wp-json/wv/v1/';

const Login = async (obj = {}) => {
    const url = URL_API_BASE + 'login';
    const res = await ApiBase.PostRequest(url, obj);
    return res;
}

const GetListPlan = async () => {
    const url = URL_API_BASE + 'list-plan';
    // const url=URL_API_BASE+'list-plan';
    const res = await ApiBase.GetRequest(url);
    return res;
}

const GetProducts = async (token) => {
    const url = URL_API_BASE + 'list-product';
    const res = await ApiBase.GetRequest(url, null, token);
    return res;
}

const GetTickets = async (token) => {
    const url = URL_API_BASE + 'list-tickets';
    const res = await ApiBase.GetRequest(url, { posts_per_page: 15 }, token);
    return res;
}

const GetUserInfo = async (token) => {
    const url = URL_API_BASE + 'user';
    const res = await ApiBase.GetRequest(url, null, token);
    return res;
}

const AddReplyTicket = async (data) => {
    let newToken = null;
    if (!newToken) {
        const user = await Storage.getUserLogin();
        newToken = user.token;
    }
    const url = URL_API_BASE + 'add-reply-ticket';
    const res = await ApiBase.PostRequest(url, data, newToken);
    return res;
}

const UpdateProduct = async (data) => {
    let newToken = null;
    if (!newToken) {
        const user = await Storage.getUserLogin();
        newToken = user.token;
    }
    const url = URL_API_BASE + 'update-product';
    const res = await ApiBase.PostRequest(url, data, newToken, 'PUT');
    return res;
}

const UpdateUser = async (data) => {
    let newToken = null;
    if (!newToken) {
        const user = await Storage.getUserLogin();
        newToken = user.token;
    }
    const url = URL_API_BASE + 'update-user';
    const res = await ApiBase.PostRequest(url, data, newToken);
    return res;
}

const GetReplysTicket = async (idTicktet, token = null) => {
    // https://valetwarranty.com/wp-json/wv/v1/list-reply-ticket
    let newToken = token;
    if (!token) {
        const user = await Storage.getUserLogin();
        newToken = user.token;
    }
    console.log('token:', newToken);
    const url = URL_API_BASE + 'list-reply-ticket';
    const res = await ApiBase.GetRequest(url, { p_id: idTicktet }, newToken);
    return res;
}

const GetProduct = async (idProduct, token = null) => {
    // https://valetwarranty.com/wp-json/wv/v1/list-reply-ticket
    let newToken = token;
    if (!token) {
        const user = await Storage.getUserLogin();
        newToken = user.token;
    }
    console.log('token:', newToken);
    const url = URL_API_BASE + 'product';
    const res = await ApiBase.GetRequest(url, { p_id: idProduct }, newToken);
    return res;
}

const AddNewTicket = async (data, token) => {
    const url = URL_API_BASE + 'add-ticket';
    const res = await ApiBase.PostRequest(url, data, token);
    return res;
}

const AddProductNew = async (data) => {
    let newToken = null;
    console.log('AddProductNew:', data);
    if (!newToken) {
        const user = await Storage.getUserLogin();
        newToken = user.token;
    }
    const url = URL_API_BASE + 'add-product';
    const res = await ApiBase.PostRequest(url, data, newToken);
    return res;
}

const DeleteProduct = async (idProduct = -100) => {
    let newToken = null;
    console.log('DeleteProduct:', idProduct);
    if (!newToken) {
        const user = await Storage.getUserLogin();
        newToken = user.token;
    }
    const url = URL_API_BASE + 'del-product';
    const res = await ApiBase.GetRequest(url, { p_id: idProduct }, newToken, 'DELETE');
    return res;
}

const SignUp = async (obj = {}) => {
    const url = URL_API_BASE + 'register';
    const res = await ApiBase.PostRequest(url, obj);
    return res;
}

export {
    Login,
    GetListPlan,
    GetProducts,
    GetTickets,
    AddNewTicket,
    GetReplysTicket,
    AddReplyTicket,
    AddProductNew,
    DeleteProduct,
    GetUserInfo,
    UpdateProduct,
    GetProduct,
    SignUp,
    UpdateUser
}
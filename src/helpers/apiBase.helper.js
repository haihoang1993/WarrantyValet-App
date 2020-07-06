import { Utils } from '@common';

const GetRequest = async (url, param = null, token = null) => {
    const myHeaders = new Headers();
    myHeaders.append("token", token);

    let requestOptions = {
    };

    if (token) {
        requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    }
    console.log('options:', requestOptions);
    let result = {}
    // const urlRequest=url + ((param)?('?' + Utils.ObjToQueryStringGet(param)):'');
    const urlRequest = url;
    console.log("RequestGetBaseApi:", urlRequest);

    try {
        let res = await fetch(urlRequest, requestOptions);
        console.log(res);

        result = { ...result, ...{ status: res.status } }

        const dataRes = await res.json();
        const { data } = dataRes;
        result = { ...result, ...{ data: data ? data : null } }

    } catch (error) {
        result = { ...result, ...{ status: 501, err: error.toString() } }
    }
    if (result.status !== 200) throw (result);
    return result;
}

const PostRequest = async (url, body, token) => {
    console.log("RequestPostBaseApi:", url);
    let result = {};
    const myHeaders = new Headers();
    // Accept: 'application/json',
    // 'Content-Type': 'application/json',
    myHeaders.append("Accept", 'application/json');
    myHeaders.append('Content-Type', 'application/json');

    let requestOptions = {
    };

    if (token) {
        myHeaders.append("token", token);
    }
    requestOptions = {
        headers: myHeaders,
    };
    const options = { ...requestOptions, ...{ method: 'POST', body: JSON.stringify(body), redirect: 'follow' } };
    console.log('options:', options);
    try {
        const res = await fetch(url, options);
        console.log('post:', res);
        result = { ...result, ...{ status: res.status } }
        const data = await res.json();
        result = { ...result, ...{ data: data ? data : null } }
    } catch (error) {
        console.log('post error:', error);
        result = { ...result, ...{ status: 501, err: error.toString() } }
    }
    if (result.status !== 200) throw (result);
    return result;
}

export {
    GetRequest,
    PostRequest,
}
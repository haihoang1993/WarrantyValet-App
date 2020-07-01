import { Utils } from '@common';

const GetRequest = async (url, param, token = null) => {
    console.log("RequestGetBaseApi:", url);
    let headers = { "Content-Type": "application/json" };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    let result = {}
    try {
        let res = await fetch(url + '?' + Utils.ObjToQueryStringGet(param), { headers: headers });
        const data = await res.json();
        result = { ...result, ...{ status: res.status, ...data } }
    } catch (error) {
        result = { ...result, ...{ status: 501, err: error.toString() } }
    }
    return result;
}

const PostRequest = async (url, body, header = null) => {
    console.log("RequestPostBaseApi:", url);
    let result = {};
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
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
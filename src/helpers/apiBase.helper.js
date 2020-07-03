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
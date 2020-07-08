
const ParseResultDataApi = (res) => {
    let reuslt = {};
    if (res.status === 200 && res.data.status === "ok") {
        reuslt = {
            ...reuslt, ...{ numErr: -1, data: res.data.response }
        }
    } else {
        reuslt = {
            ...reuslt, ...{ numErr: 1 }
        }
    }
    return reuslt;
}

const ParseResultError = (numeErr = 1, err = "") => {
    return {
        numErr: numeErr,
        err: err
    }
}

const ObjToQueryStringGet = (obj) => {
    const keyValuePairs = [];
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
        keyValuePairs.push(`${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`);
    }
    return keyValuePairs.join('&');
}


const validateObj = (obj, keys = []) => {
    let check = false;
    keys.forEach((value) => {
        check = (Reflect.has(obj, value) && obj[value] != undefined && obj[value] != '');
        if (!check)
            return check;
    })
    return check;
}

const formatPhotos = (list) => {
    return list.map((item) => {
        let { name, type } = item;
        name = (!name) ? new Date().getTime().toString() : name;
        name = name + '.' + ((type == 'image/png') ? 'png' : 'jpg');
        return {
            ...item, ...{ name }
        }
    })
}

const formatPhoto = (item) => {
    let { name, type } = item;
    name = (!name) ? new Date().getTime().toString() : name;
    name = name + '.' + ((type == 'image/png') ? 'png' : 'jpg');
    return {
        ...item, ...{ name }
    }
}
export {
    ParseResultDataApi,
    ParseResultError,
    ObjToQueryStringGet,
    validateObj,
    formatPhotos,
    formatPhoto
}
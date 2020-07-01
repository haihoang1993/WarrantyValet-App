
const ParseResultDataApi=(res)=>{
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

const ParseResultError=(numeErr=1, err="")=>{
    return {
        numErr:numeErr,
        err:err
    }
}

const ObjToQueryStringGet=(obj) =>{
    const keyValuePairs = [];
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
        keyValuePairs.push(`${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`);
    }
    return keyValuePairs.join('&');
}


export {
    ParseResultDataApi,
    ParseResultError,
    ObjToQueryStringGet,
}
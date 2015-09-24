var apiBaseUrl = 'http://api.wallstreetcn.com';

const apiUrl={
    Post:{
        get:apiBaseUrl+'/posts'
    },
    Livenews:{
        get:apiBaseUrl+'/livenews'
    }
}

var routeReg = /:([_a-zA-Z][_a-zA-Z0-9]+)/g

function getApiUrl(key,obj,baseUrl){
    baseUrl = baseUrl || apiBaseUrl
    var urlStr
    if(key in apiUrl){
        urlStr = baseUrl + apiUrl[key]
    }else{
        urlStr = baseUrl + key;
    }
    return urlStr.replace(routeReg,function(match,p1){
        return obj[p1]
    })
}



module.exports = getApiUrl

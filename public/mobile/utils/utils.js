import getApiUrl from './getApiUrl.js'

const Utils = {}

var toString = Object.prototype.toString
Utils.Type={
    isArray(obj){
        return toString.call(obj) == '[object Array]';
    },
    isFunction(obj){
        return typeof obj === 'function'
    }
}

Utils.State={
    setShallow(originState,state){
        var newState =  Object.assign({},state)
        for(var i in originState){
            if( !(i in newState) ){
                newState[i] = originState[i];
            }
        }
        return newState;
    }
}

Utils.Url={
    generate(url,queryObj){
        var ret = [];
        for (var d in queryObj)
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(queryObj[d]));
        var str =  ret.join("&");
        if(url.indexOf('?')==-1){
            return url + '?' + str;
        }else{
            return url+str;
        }
    }
}

function _d(i) {
    return i < 10 ? '0' + i : i
}
Utils.Time={
    getTimeObj(d){
        var year= d.getFullYear(),
            month = d.getMonth()+1,
            date = d.getDate(),
            hour = d.getHours(),
            minute = d.getMinutes(),
            second = d.getSeconds();
        return {
            year:year,
            month : _d(month),
            date : _d(date),
            hour : _d(hour),
            minute : _d(minute),
            second:_d(second)
        }
    }
}


Utils.getApiUrl=getApiUrl

export default Utils
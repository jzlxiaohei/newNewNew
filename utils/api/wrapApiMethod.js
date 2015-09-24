'use strict'

var _ = require('lodash')

//function createMiddleware(fn){
//    return function(next,queryObj){
//        console.log('request begin')
//        var oldNext = next;
//        //重写next
//        next = function(err,res){
//            console.log('request end')
//            oldNext(err,res)
//        }
//        fn(next,queryObj);
//    }
//}

function defaultFilter(i,obj){
    return _.isFunction(obj[i]);
}


function wrapApiMethod(fn,before,after){
    return (next,queryObj)=>{
        before(queryObj);

        var oldNext = next;
        next = (err,res)=>{
            after(err,res);
            oldNext(err,res)
        }

        fn(next,queryObj);
    }
}

module.exports= wrapApiMethod
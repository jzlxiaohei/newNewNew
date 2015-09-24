var wrapApiMethod = require('./wrapApiMethod')

function basicTimeRecordCreator(fn){
    var time;
    return wrapApiMethod(
        fn,
        function before(queryObj){time = Date.now()},
        function after(err,res){console.log(Date.now()-time);}
    )
}

function basicTimeRecordCreator2(fn){
    var time;
    return wrapApiMethod(
        fn,
        function before(queryObj){time = Date.now()},
        function after(err,res){console.log((Date.now()-time)+'---2');}
    )
}

function composeCreator(creator1,creator2){
    return function(fn){
        var fn1 = creator1(fn)
        return creator2(fn1);
    }
}

function composeCreator2(creators){
    return function(fn){
        return creators.reduce((preCreator,curCreator)=>{
            return curCreator(preCreator)
        },fn)
    }
}

module.exports={
    basicTimeRecordCreator,
    basicTimeRecordCreator2,
    composeCreator,
    composeCreator2
}


//get:predefinedWrapper.composeCreator2([predefinedWrapper.basicTimeRecordCreator
//    ,predefinedWrapper.basicTimeRecordCreator2,predefinedWrapper.basicTimeRecordCreator])(
//    function(next,queryObj){
//        superagent(ApiAddressMap.Livenews.get)
//            .query(queryObj)
//            .accept('application/json')
//            .end((err,res)=>{
//                next(err,res.body);
//            })
//    }
//)

//get:predefinedWrapper.basicTimeRecordCreator(
//    function(next,queryObj){
//        superagent(ApiAddressMap.Livenews.get)
//            .query(queryObj)
//            .accept('application/json')
//            .end((err,res)=>{
//                next(err,res.body);
//            })
//    }
//)
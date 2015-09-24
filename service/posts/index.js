var superagent =require('superagent');
const getApiUrl = require.main.require('./service/getApiUrl.js')

var predefinedWrapper = require.main.require('./utils/api/predefinedWrapper.js');
var wrapApiMethod = require.main.require('./utils/api/wrapApiMethod.js');



var getTime;

var apiObj = {
    get:wrapApiMethod(
        function(next,queryObj){
            superagent(getApiUrl('/v2/posts'))
                .query(queryObj)
                .accept('application/json')
                .end((err,res)=>{
                    next(err,res.body);
                })
        },
        function before(queryObj){
            getTime = Date.now();
        },
        function after(err,res){
            console.log(Date.now()-getTime)
        }
    ),
    getDetail:function(next,queryObj){
        var postId = queryObj.postId;
        var apiUrl = getApiUrl('/v2/posts/:postId',{postId:postId});
        superagent(apiUrl)
            .timeout(10*1000)
            .accept('application/json')
            .end((err,res)=>{
                next(err,res.body);
            })
    }
}

module.exports= apiObj;



var superagent = require('superagent');
const getApiUrl = require.main.require('./service/getApiUrl.js')

module.exports={
    get:function(next,queryObj){
        superagent( getApiUrl('/v2/livenews') )
            .query(queryObj)
            .end((err,res)=>{
                next(err,res.body)
            })
    }
}
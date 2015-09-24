
var router = require('express').Router();

var livenewsService =  require.main.require('./service/livenews/index.js')

router.get('/',function(req,res){
    var page = req.query['page'] || 1;
    livenewsService.get(function(err,result){
        res.json(result)
    },{page:page})
})

module.exports={
    router:router
}
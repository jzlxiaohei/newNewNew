
var router = require('express').Router();

var postService =  require.main.require('./service/posts/index.js')

router.get('/',function(req,res){
    var page = req.query['page'] || 1;
    postService.get(function(err,result){
        res.json(result)
    },{page:page})
})

router.get('/:postId',function(req,res,next){
    var postId = req.params['postId'];
    if(!postId){
        next(new Error(`postId:${postId} is invalid`))
    }
    postService.getDetail(function(err,result){
        res.json(result)
    },{postId:postId})
})

module.exports={
    router:router
}
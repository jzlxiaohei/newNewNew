var router = require('express').Router();

router.get('/',function(req,res){
    res.render('mobile/index')
})

module.exports={
    router:router
}
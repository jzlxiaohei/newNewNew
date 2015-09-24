var router = require('express').Router();

router.get('/',function(req,res){
    //res.render('index',{})
    res.end('hh')
})


module.exports={
    router:router
}

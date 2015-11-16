var path = require('path')
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var superagent = require('superagent')
var config = require('./config')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade')
if (config.Env === 'prod') {
    app.enable('view cache');
}


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

require('./init')(app)

//app.use(function(req,res,next){
//    if(req.url.indexOf('FCharts.js')!=-1){
//        superagent('http://localhost:8080/build/FCharts.js')
//            .end(function(err,result){
//                console.log(result)
//                res.send(result.text)
//            })
//    }else{
//        next()
//    }
//})

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/static_page'))

console.log(config)
if (config.isProduction) {
    console.log('run in prod mode')
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}else{
    console.log('run in dev mode')
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: JSON.stringify(err.stack)
        });
    });
}

var port = config.port;
app.listen(port,function(){
    console.log('server start:'+port)
})


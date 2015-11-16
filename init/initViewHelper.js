var fs = require('fs')
var path = require('path')

const config = global.config
const basePath = global.basePath;

var assetsJson = {}
if(config.isProduction){
    var fileContent = fs.readFileSync(path.join(basePath,'public/webpack-assets.json'))
    assetsJson = JSON.parse(fileContent);
    console.log(assetsJson)
}

module.exports = function(app){
    app.locals.getStatic =function(path){
        if(config.isProduction){
            var lastIndex = path.lastIndexOf('.')
            var name = path.substr(0,lastIndex),
                suffix = path.substr(lastIndex+1);
            if(name in assetsJson){
                return '/dist'+assetsJson[name][suffix]
            }else{
                return path;
            }
        }else{
            if(path.indexOf('/')==0){
                return path;
            }else{
                return 'http://localhost:8080/'+path;
            }
        }
    }

    app.locals.getDebugScript=function(){
        if(config.isProduction){
            return ''
        }
        return ' <script src="http://localhost:8080/webpack-dev-server.js"></script>'

    }
}
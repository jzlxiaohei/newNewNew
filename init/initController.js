var path = require('path')
var glob = require('glob')


function lowerFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}


//   xxx/yyController.js will be xxx/yy
function getControllerPath(diffPath){
    var filePaths =  diffPath.split(path.sep)
    var len = filePaths.length
    var fileName = filePaths[len-1];
    var lastName = fileName.substr(0,fileName.indexOf('Controller'));

    if(lastName=='Index'){filePaths.pop()}//当是 xxx/IndexController.js时，路由到/xxx
    else{filePaths[len-1] = lastName}

    return filePaths.map(function(item){
        return lowerFirstLetter(item);
    }).join('/')
}

var allRouterPath ={}

module.exports = function initController(app){
    var controllerBasePath = path.join( process.cwd(),'controller' )
    var controllerFiles = glob.sync(controllerBasePath+'/**/*Controller.js');
    for(var i = 0;i<controllerFiles.length;i++){
        var file = controllerFiles[i]

        var routerObj = require(file);
        var ns = routerObj['ns']
        if(!ns){
            var diffPath = path.relative(controllerBasePath,file);
            ns = getControllerPath(diffPath)
        }
        if(ns.charAt(0)!=='/'){ns='/'+ns}

        if(ns in allRouterPath){
            throw new Error('router path:"'+ns+'" duplicated!')
        }
        allRouterPath[ns]=''
        app.use(ns,routerObj.router);
    }
    //console.log(allRouterPath)
}

module.exports = function(app){
    app.locals.getStatic =function(path){
        return path;//cdn path
    }
}
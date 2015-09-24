/**
 * Created by zilong on 9/5/15.
 */


module.exports = function(app){
    //init global first
    //require('./initGlobalVariable')

    require('./initViewHelper.js')(app)

    require('./initController.js')(app)
}
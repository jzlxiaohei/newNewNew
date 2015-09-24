var _ = require('lodash')

var defaultConfig = require('./config.default.js')
var localConfig = require('./config.local.js')

var config = defaultConfig;

module.exports = _.merge({},config,localConfig)

//for(var i in localConfig){
//    config[i] = localConfig[i]
//}



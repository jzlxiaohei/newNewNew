var config  = require.main.require('./config/index.js')

global.config = config;

global.basePath =  process.cwd();
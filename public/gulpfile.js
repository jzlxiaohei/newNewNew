var gulp = require('gulp')
var gutil = require('gulp-util');

var webpack =  require('webpack')
var webpackConfig = require('./webpack.config.js')

var path = require('path');


gulp.task('default',function(callback){
    var config = Object.create(webpackConfig)

    for(var i in config.entry){
        var entryItem = config.entry[i]
        var index = entryItem.findIndex(item=>item == 'webpack/hot/dev-server')
        entryItem.splice(index,1)
    }
    //console.log(config.entry)

    config.plugins = config.plugins || [];
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$', 'exports', 'require']
        }
    }))
    webpack(webpackConfig,function(err,stats){
        if(err) {
            throw new gutil.PluginError("webpack-dev", err);
        }
        if(typeof callback=='function'){
            callback();
        }
    })
})

var WebpackDevServer = require("webpack-dev-server");
gulp.task('dev-server',function(){
    //console.log(process.cwd())
    var config = Object.create(webpackConfig);
    config.debug = true;
    config.devtool = 'eval'
    config.output.sourceMapFilename='[name].map'
    config.plugins = config.plugins ||[];
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    new WebpackDevServer(webpack(config),{
        publicPath:config.output.publicPath,
        hot:true,
        inline: true,
        stats:{
            colors:true
        },
        proxy:[{
            path:/\/api(.*)/,
            target:'http://localhost:3001'
        }],
        lazy: false
    }).listen(8080,'localhost',function(err){
            if(err) throw new gutil.PluginError('webpack-dev-server',err);
        })
})
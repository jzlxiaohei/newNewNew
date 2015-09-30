var gulp = require('gulp')
var gutil = require('gulp-util');
var glob = require('glob')
var webpack =  require('webpack')
var webpackConfig = require('./webpack.config.js')
var fs = require('fs')
var path = require('path');
var _ = require('lodash')


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
            throw new gutil.PluginError("webpack-default", err);
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
    //config.output.sourceMapFilename='[name].map'
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
        lazy: false,
        historyApiFallback: true
    }).listen(8080,'localhost',function(err){
            if(err) throw new gutil.PluginError('webpack-dev-server',err);
        })
})


gulp.task('build',function(callback){
    var files = glob.sync('**/entry.json')

    var entries = {}

    for(var i = 0;i<files.length;i++){
        var content = fs.readFileSync(path.join(__dirname,files[i]))
        var json = JSON.parse(content);
        var relativePathFile = json['entry'];
        var keyWithSuffix = path.join(files[i],'../',relativePathFile);

        var lastIndex = keyWithSuffix.lastIndexOf('.')
        var key = keyWithSuffix.substr(0,lastIndex)
        //var suffix = keyWithSuffix(lastIndex+1)
        entries[key] = path.join(__dirname,files[i],'../',relativePathFile)

    }

    //console.log(entries)
    var config = _.merge({},webpackConfig)
    console.log(webpackConfig)
    console.log(config)
    config.entry=entries
    config.plugins = config.plugins || [];
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$', 'exports', 'require']
        }
    }))
    console.log(config);
    webpack(config,function(err,stats){
        console.log(stats)
        if(err) {
            throw new gutil.PluginError("webpack-build", err);
        }
        if(typeof callback=='function'){
            callback();
        }
    })
})
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')
var path = require('path')
var AssetsPlugin         = require('assets-webpack-plugin');

var autoprefixer = require('autoprefixer');
var precss      = require('precss');
var fs = require('fs')

/**
 * 应该配置project_name 和 rootDeployPath
 * rootDeployPath要以 / 结尾
 */
var rootDeployPath = path.join(__dirname,'../public/static/dist/')

if(rootDeployPath[rootDeployPath.length-1]!='/'){
    rootDeployPath+='/'
}

//if(!isDirExist(rootDeployPath)){
//    throw new Error('rootDeployPath:'+rootDeployPath+' is not exist')
//}

var assetsPluginInstance = new AssetsPlugin({
    path:rootDeployPath,
    filename:'assets-map.json',
    update: true,
    prettyPrint: true
    //fullPath:false
})


var node_modules = path.join(__dirname,'../node_modules/')

function getWebpackConfig(project_name){
    console.log(path.join(node_modules,'./react/dist/react.min.js'))
    return  {
        //__project_name:project_name,
        entry: {
        },
        output: {
            filename: "[name].js?v=[chunkhash]",
            chunkFilename:'[name].js?v=[chunkhash]',
            path: path.join(rootDeployPath),
            libraryTarget:'umd',
            publicPath:'/'
        },
        externals:{
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'jquery': {
                root: 'jQuery',
                commonjs2: 'jquery',
                commonjs: 'jquery',
                amd: 'jquery'
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        },
        resolve:{
            alias:{
                react:path.join(node_modules,'./react/dist/react.min.js'),
                jquery:path.join(node_modules,'./jquery/dist/jquery.min.js')
            }
        },
        module: {
            noParse:[
                path.join(node_modules,'./react/dist/react.min.js'),
                path.join(node_modules,'./jquery/dist/jquery.min.js')
            ],
            loaders: [
                {
                    test: /[\.jsx|\.js ]$/,
                    exclude: /node_modules/,
                    loader: "babel-loader?stage=0&optional[]=runtime"
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!less-loader')
                },
                { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=10000&name='+project_name+'/img/[name].[hash].[ext]' }
            ]
        },
        devtool:'sourcemap',
        plugins: [
            new ExtractTextPlugin("[name].css?v=[chunkhash]"),
            new webpack.optimize.UglifyJsPlugin({
                mangle: {
                    except: ['$', 'exports', 'require']
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:project_name+'/commons',
                filename:project_name+'/commons.js',
                minChunks:function(module,count){

                    if(count>=3){
                        return true;
                    }

                    var resourceName = module.resource
                    if(resourceName){
                        resourceName = resourceName.substring(resourceName.lastIndexOf(path.sep)+1)
                    }
                    var reg = /^(\w)+.common/
                    if(reg.test(resourceName)){
                        return true;
                    }

                    return false;
                }
            }),
            assetsPluginInstance
        ],
        postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
    }
}
module.exports = getWebpackConfig

function isDirExist(dirname){
    try{
        var fsStat =fs.statSync(dirname)

        return fsStat.isDirectory()
    }catch(e){
        return false
    }
}

function isFileExist(filename){
    var fsStat =fs.statSync(filename)
    return fsStat.isFile()
}
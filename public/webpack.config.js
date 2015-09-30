var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')
var path = require('path')
var AssetsPlugin         = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({});
var autoprefixer = require('autoprefixer');
var precss      = require('precss');


module.exports = {
    cache:true,
    //entry: "./client/Index.jsx",
    entry: {
        'mobile/index':[
            "webpack/hot/dev-server",
            //"./index/Main.jsx"
            "./mobile/main.js"
        ]
    },
    output: {
        filename: "[name].js?hash=[hash]",
        chunkFilename:'[name].js',
        path: __dirname + "/dist",
        libraryTarget:'umd',
        sourceMapFilename:'[name].map',

        //library:'libName',
        publicPath:'/'//webpack-dev-server build的文件是在内存里的，使用时，在硬盘上看不到生成的文件。这个路径是静态文件的basePath
    },
    //devtool: 'eval',
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
        'wscn-common':{
            commonjs2:'wscn-common',
            commonjs:'wscn-common'
        }
    },
    module: {
        loaders: [
            {
                test: /[\.jsx|\.js ]$/,
                exclude: /node_modules/,
                loader: "babel-loader?stage=0&optional[]=runtime"
            },
            //{ test: /\.css$/, loader: "style!css!postcss-loader" }
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            //{
            //    test: /\.less$/,
            //    loader: "style-loader!css-loader!postcss-loader!less-loader"
            //}
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
            }
        ]
    },
    devtool:'eval',
    plugins: [
        new ExtractTextPlugin("[name].css"),
        //new webpack.HotModuleReplacementPlugin(),
        assetsPluginInstance,
        new webpack.OldWatchingPlugin()//新版的不知道为啥不watch，用这个可以临时解决。
    ],
    postcss: function () {
        return [autoprefixer, precss];
    }
}
/*
Use webpack -p to compress output.js
*/
var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 使用 extract text webpack plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// 建立一個 extract text plugin 的實例

module.exports = {
    /* 输入文件 */
    entry: {
        devManual: [
            './public/src/devManual.js'
        ]
    },
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, 'public/dist/'),
        /* 静态目录，可以直接从这里取文件 */
        /* publicPath -> add path to url prefix*/
        //publicPath: '../public/dist/',
        /* 文件名 */
        filename: 'js/[name].[chunkhash:8].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                /* 用来解析vue后缀的文件 */
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            },
            /*{
                test: /\.css$/,
                use: [
                    'style-loader',  // 這個後 (順序很重要)
                    'css-loader' // 這個先
                ]
            },*/
            {
                test: /\.(scss|sass)$/,
                //利用 extractPlugin 實例裡的 extract 來建立 Loader
                loader: ExtractTextPlugin.extract({
                    use: [{
                            loader: "css-loader"
                        }, 
                        {
                            loader:'resolve-url-loader'
                        },
                        {
                            loader: "sass-loader"
                    }],
                    // 在开发环境使用 style-loader
                    //fallback: "style-loader"
                })               
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: 'file-loader',
                options:{
                    emitFile:false,
                    name:"[path][name].[ext]"
                }
            }
        
        ]
    },
    resolve: {
        extensions: ['.js', '.vue','.scss','.sass'],
        alias: {
            //'vue': 'vue/dist/vue.js'  // developement mode
            'vue': 'vue/dist/vue.common.js', // production mode
            // if use npm install jquery
            //'jquery': 'jquery'
            // webpack use jQuery，If download jquery by self
            'jquery': path.resolve(__dirname, 'public/assets/plugins/jquery/jquery.min.js'),
            'bootstrap': path.resolve(__dirname, 'public/assets/plugins/bootstrap/js/bootstrap.min.js'),
            //'assets': path.resolve(__dirname,'../public/assets/img/')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['public/dist']),
        new HtmlWebpackPlugin({
            filename: 'content.html',
            template: 'public/content.html',
            chunks  : ['content']
        }), 
        new CopyWebpackPlugin([
            { 
                from: 'public/assets/plugins/bootstrap', 
                to: 'plugins/bootstrap/',
                toType: 'dir' 
            },
            { 
                from: 'public/assets/plugins/jquery/jquery.min.js', 
                to: 'plugins/jquery/',
                toType: 'dir' 
            },
            { 
                from: 'public/assets/plugins/font-awesome/', 
                to: 'plugins/font-awesome',
                toType: 'dir' 
            },
            { 
                from: 'public/assets/plugins/open-icons/', 
                to: 'plugins/open-icons',
                toType: 'dir' 
            }
            
          ]),
        // short-circuits all Vue.js warning code
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Tether: 'tether'
        }),
        new ExtractTextPlugin({
            publicPath: 'public/dist/',
            //filename: 'css/main.css' // scss轉css後另存的目標檔名
            filename: "css/main.[contenthash:8].css",
            //disable: process.env.NODE_ENV === "development"
         }) // 把extract過的loader轉存成css檔 
        
    ]
}
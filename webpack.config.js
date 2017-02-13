const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
                // 使用vue-loader 加载 .vue 结尾的文件
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.html$/,
                loader: 'vue-html'
            }, {
                test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    // example: if you wish to apply custom babel options
    // instead of using vue-loader's default:
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
            vueRouter: 'vue-router/dist/vue-router.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}

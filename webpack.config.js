var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve("client"),
    entry: ['./app/app'],
    output: {
        path: path.resolve("./dist"),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ]
};
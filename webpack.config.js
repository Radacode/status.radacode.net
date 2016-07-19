var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './build/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './app/index.html'
    })]
};
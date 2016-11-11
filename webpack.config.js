var path = require("path");

module.exports = {
    context: path.resolve("client"),
    entry: ['./app/app'],
    output: {
        path: path.resolve("./dist"),
        filename: 'bundle.js'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        ]
    }
};
module.exports = {
    entry: './app/app.js',
    output: {
        path: './build/',
        filename: 'app.js'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        ],
    }
};
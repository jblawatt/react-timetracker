const webpack = require("webpack");

module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }]
    },
    externals: { 'React': 'react' },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react"
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: "bundle.js.map"
        })
    ],
    devtool: "eval-source-map"
}
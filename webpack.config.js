const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context:path.resolve(__dirname,'src'),
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template:'./index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        port:4200
    }
}
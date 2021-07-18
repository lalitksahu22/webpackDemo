const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        clean: true,
        publicPath: './'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template:'./index.html'
            }
         )
    ],
}
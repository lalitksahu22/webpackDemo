const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.common');
const merge = require('webpack-merge');


let customMerge= merge.mergeWithRules({
    module: {
        rules: {
            test: "match",
            use: 'prepend'
        },
    },
    plugins: 'append'
});

module.exports = customMerge(common, {
    mode: 'production',
    output: {
        filename: '[name]-[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        })
    ],
});
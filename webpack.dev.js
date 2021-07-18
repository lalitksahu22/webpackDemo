const path = require('path');
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
    mode: 'development',
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader']
            }
        ]
    }
});
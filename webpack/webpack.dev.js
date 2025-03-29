const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: path.join(__dirname, "build"),
        historyApiFallback: {
            index: "/",
        },
        compress: true,
        port: 3000,
        hot: true,
    }
});

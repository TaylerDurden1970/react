const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(ROOT, './src/index.jsx'),
    resolve: {
        extensions: ['.jsx', '.js',],
        modules: [path.resolve(ROOT, './src'),'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>React App</title>
                </head>
                <body>
                    <div id="root"></div>
                </body>
                </html>
            `,
        }),
    ],
}
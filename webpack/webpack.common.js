const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "../src/index.tsx"),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"], // Добавляем ts, tsx
        modules: [path.resolve(__dirname, "../src"), "node_modules"], // Убираем index.tsx
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,  // Расширения для TypeScript
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",  // Используем ts-loader для TypeScript
                },
            },
            {
                test: /\.(js|jsx)$/, // Для обычных JS файлов
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React App</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>`,
        }),
        new ESLintPlugin({
            extensions: ['ts', 'tsx'],
        }),
    ],
};

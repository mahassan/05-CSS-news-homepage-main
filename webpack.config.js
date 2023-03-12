const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
    mode: "development",
    entry: "/src/main.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist/")
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })]
}
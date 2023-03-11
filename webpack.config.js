const path = require("path");
module.exports = {
    mode: "development",
    entry: "/src/main.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist/")
    }
}
const path = require("path")
const baseConfig = require("./base.config")
const webpack = require("webpack")
const WebpackBar = require("webpackbar")

module.exports = {
    ...baseConfig,
    name: "client",
    entry: [
        "./src/client/index.js",
        "webpack-hot-middleware/client"
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../dist/public"),
        // publicPath: "/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBar()
    ]
}

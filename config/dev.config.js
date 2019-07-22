const path = require("path")
const webpack = require("webpack")
const WebpackBar = require("webpackbar")

module.exports = {
    mode: "development",
    entry: [
        "./src/client/index.js",
        "webpack-hot-middleware/client"
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../dist/public"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)*/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBar()
    ]
}

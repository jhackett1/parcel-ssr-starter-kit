const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

browserConfig = {
    entry: "./src/client/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist/public")
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
        extensions: [".js", ".jsx"]
    }
}

serverConfig = {
    entry: "./src/server/index.js",
    target: "node",
    output: {
        filename: "server.js",
        path: path.join(__dirname, "/dist"),
        libraryTarget: "commonjs2"
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
        extensions: [".js", ".jsx"]
    }
}

module.exports = [browserConfig, serverConfig]
const path = require("path")
const nodeExternals = require("webpack-node-externals")

common = {
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

client = {
    ...common,
    entry: "./src/client/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist/public")
    }
}

server = {
    ...common,
    entry: "./src/server/index.js",
    target: "node",
    output: {
        filename: "server.js",
        path: path.join(__dirname, "/dist"),
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()]
}

module.exports = [client, server]